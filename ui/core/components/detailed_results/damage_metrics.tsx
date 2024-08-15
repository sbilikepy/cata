import { TOOLTIP_METRIC_LABELS } from '../../constants/tooltips';
import { SpellType } from '../../proto/api';
import { ActionMetrics } from '../../proto_utils/sim_result';
import { bucket, formatToCompactNumber, formatToNumber, formatToPercent } from '../../utils';
import { MetricsCombinedTooltipTable } from './metrics_table/metrics_combined_tooltip_table';
import { ColumnSortType, MetricsTable } from './metrics_table/metrics_table';
import { MetricsTotalBar } from './metrics_table/metrics_total_bar';
import { ResultComponentConfig, SimResultData } from './result_component';

export class DamageMetricsTable extends MetricsTable<ActionMetrics> {
	maxDamageAmount: number | null = null;
	constructor(config: ResultComponentConfig) {
		config.rootCssClass = 'damage-metrics-root';
		config.resultsEmitter.on((_, resultData) => {
			const lastResult = resultData
				? this.getGroupedMetrics(resultData)
						.filter(g => g.length)
						.map(groups => this.mergeMetrics(groups))
				: undefined;
			this.maxDamageAmount = Math.max(...(lastResult || []).map(a => a.damage));
		});
		super(config, [
			MetricsTable.nameCellConfig((metric: ActionMetrics) => {
				return {
					name: metric.name,
					actionId: metric.actionId,
					metricType: metric.constructor?.name,
				};
			}),
			{
				name: 'Damage done',
				headerCellClass: 'text-center',
				getValue: (metric: ActionMetrics) => metric.avgDamage,
				fillCell: (metric: ActionMetrics, cellElem: HTMLElement) => {
					console.log(metric.name, metric);
					cellElem.appendChild(
						<MetricsTotalBar
							spellSchool={metric.spellSchool}
							percentage={metric.totalDamagePercent}
							max={this.maxDamageAmount}
							total={metric.avgDamage}
							value={metric.damage}
						/>,
					);

					const hitValues = metric.damageDone.hit;
					const critValues = metric.damageDone.crit;
					const tickValues = metric.damageDone.tick;
					const critTickValues = metric.damageDone.critTick;
					const glanceValues = metric.damageDone.glance;
					const blockValues = metric.damageDone.block;
					const critBlockValues = metric.damageDone.critBlock;

					<MetricsCombinedTooltipTable
						tooltipElement={cellElem}
						headerValues={[, 'Amount']}
						spellSchool={metric.spellSchool}
						total={metric.damage}
						totalPercentage={100}
						hasFooter={false}
						values={[
							{
								name: 'Hit',
								...hitValues,
							},
							{
								name: `Critical Hit`,
								...critValues,
							},
							{
								name: 'Tick',
								...tickValues,
							},
							{
								name: `Critical Tick`,
								...critTickValues,
							},
							{
								name: 'Glancing Blow',
								...glanceValues,
							},
							{
								name: 'Blocked Hit',
								...blockValues,
							},
							{
								name: 'Blocked Critical Hit',
								...critBlockValues,
							},
						]}
					/>;
				},
			},
			{
				name: 'Casts',
				getValue: (metric: ActionMetrics) => metric.casts,
				fillCell: (metric: ActionMetrics, cellElem: HTMLElement) => {
					cellElem.appendChild(<>{formatToNumber(metric.casts, { fallbackString: '-' })}</>);
					if (!metric.casts) return;

					const relativeHitPercent = (metric.landedHits / (metric.landedHits + metric.totalMisses)) * 100;

					<MetricsCombinedTooltipTable
						tooltipElement={cellElem}
						spellSchool={metric.spellSchool}
						total={metric.casts}
						totalPercentage={100}
						hasFooter={false}
						values={[
							{
								name: 'Hits',
								value: metric.landedHits,
								percentage: relativeHitPercent,
							},
							{
								name: `Misses`,
								value: metric.totalMisses,
								percentage: metric.totalMissesPercent,
							},
						]}
					/>;
				},
			},
			{
				name: 'Avg Cast',
				tooltip: TOOLTIP_METRIC_LABELS['Damage Avg Cast'],
				getValue: (metric: ActionMetrics) => {
					if (metric.isPassiveAction) return 0;
					return metric.avgCast;
				},
				fillCell: (metric: ActionMetrics, cellElem: HTMLElement) => {
					cellElem.appendChild(<>{formatToCompactNumber(metric.avgCast, { fallbackString: '-' })}</>);
					if (!metric.avgCast) return;

					<MetricsCombinedTooltipTable
						tooltipElement={cellElem}
						tooltipConfig={{
							onShow: () => {
								const hideThreatMetrics = !!document.querySelector('.hide-threat-metrics');
								if (hideThreatMetrics) return false;
							},
						}}
						headerValues={[, 'Amount']}
						spellSchool={metric.spellSchool}
						total={metric.avgCastThreat}
						totalPercentage={100}
						hasFooter={false}
						values={[
							{
								name: 'Threat',
								value: metric.avgCastThreat,
								percentage: 100,
							},
						]}
					/>;
				},
			},
			{
				name: 'Hits',
				getValue: (metric: ActionMetrics) => metric.landedHits,
				fillCell: (metric: ActionMetrics, cellElem: HTMLElement) => {
					cellElem.appendChild(<>{formatToNumber(metric.landedHits, { fallbackString: '-' })}</>);
					if (!metric.landedHits || !metric.ticks) return;

					const relativeHitPercent = (metric.hits / metric.landedHits) * 100;
					const relativeCritPercent = (metric.crits / metric.landedHits) * 100;
					const relativeTickPercent = (metric.ticks / metric.landedHits) * 100;
					const relativeCritTickPercent = (metric.critTicks / metric.landedHits) * 100;
					const relativeGlancePercent = (metric.glances / metric.landedHits) * 100;
					const relativeBlockPercent = (metric.blocks / metric.landedHits) * 100;
					const relativeCritBlockPercent = (metric.critBlocks / metric.landedHits) * 100;

					<MetricsCombinedTooltipTable
						tooltipElement={cellElem}
						spellSchool={metric.spellSchool}
						total={metric.landedHits}
						totalPercentage={100}
						hasFooter={false}
						values={[
							{
								name: 'Hit',
								value: metric.hits,
								percentage: relativeHitPercent,
							},
							{
								name: `Critical Hit`,
								value: metric.crits,
								percentage: relativeCritPercent,
							},

							{
								name: 'Tick',
								value: metric.ticks,
								percentage: relativeTickPercent,
							},
							{
								name: `Critical Tick`,
								value: metric.critTicks,
								percentage: relativeCritTickPercent,
							},
							{
								name: 'Glancing Blow',
								value: metric.glances,
								percentage: relativeGlancePercent,
							},
							{
								name: 'Blocked Hit',
								value: metric.blocks,
								percentage: relativeBlockPercent,
							},
							{
								name: 'Blocked Critical Hit',
								value: metric.critBlocks,
								percentage: relativeCritBlockPercent,
							},
						]}
					/>;
				},
			},
			{
				name: 'Avg Hit',
				getValue: (metric: ActionMetrics) => metric.avgHit,
				fillCell: (metric: ActionMetrics, cellElem: HTMLElement) => {
					cellElem.appendChild(<>{formatToCompactNumber(metric.avgHit, { fallbackString: '-' })}</>);
					if (!metric.avgHit) return;

					<MetricsCombinedTooltipTable
						tooltipElement={cellElem}
						tooltipConfig={{
							onShow: () => {
								const hideThreatMetrics = !!document.querySelector('.hide-threat-metrics');
								if (hideThreatMetrics) return false;
							},
						}}
						headerValues={[, 'Amount']}
						spellSchool={metric.spellSchool}
						total={metric.avgHitThreat}
						totalPercentage={100}
						hasFooter={false}
						values={[
							{
								name: 'Threat',
								value: metric.avgHitThreat,
								percentage: 100,
							},
						]}
					/>;
				},
			},
			{
				name: 'Crit %',
				getValue: (metric: ActionMetrics) => metric.critPercent,
				getDisplayString: (metric: ActionMetrics) => formatToPercent(metric.critPercent, { fallbackString: '-' }),
			},
			{
				name: 'Miss %',
				getValue: (metric: ActionMetrics) => metric.totalMissesPercent,
				fillCell: (metric: ActionMetrics, cellElem: HTMLElement) => {
					cellElem.appendChild(<>{formatToPercent(metric.totalMissesPercent, { fallbackString: '-' })}</>);
					if (!metric.totalMissesPercent) return;

					<MetricsCombinedTooltipTable
						tooltipElement={cellElem}
						spellSchool={metric.spellSchool}
						total={metric.totalMisses}
						totalPercentage={metric.totalMissesPercent}
						hasFooter={false}
						values={[
							{
								name: 'Miss',
								value: metric.misses,
								percentage: metric.missPercent,
							},
							{
								name: 'Parry',
								value: metric.parries,
								percentage: metric.parryPercent,
							},
							{
								name: 'Dodge',
								value: metric.dodges,
								percentage: metric.dodgePercent,
							},
						]}
					/>;
				},
			},
			{
				name: 'DPET',
				getValue: (metric: ActionMetrics) => metric.damageThroughput,
				getDisplayString: (metric: ActionMetrics) => formatToCompactNumber(metric.damageThroughput, { fallbackString: '-' }),
			},
			{
				name: 'DPS',
				headerCellClass: 'text-body',
				columnClass: 'text-success',
				sort: ColumnSortType.Descending,
				getValue: (metric: ActionMetrics) => metric.dps,
				fillCell: (metric: ActionMetrics, cellElem: HTMLElement) => {
					cellElem.appendChild(<>{formatToNumber(metric.dps, { minimumFractionDigits: 2, fallbackString: '-' })}</>);
					if (!metric.dps) return;

					<MetricsCombinedTooltipTable
						tooltipElement={cellElem}
						tooltipConfig={{
							onShow: () => {
								const hideThreatMetrics = !!document.querySelector('.hide-threat-metrics');
								if (hideThreatMetrics) return false;
							},
						}}
						headerValues={[, 'Amount']}
						spellSchool={metric.spellSchool}
						total={metric.tps}
						totalPercentage={100}
						hasFooter={false}
						values={[
							{
								name: 'Threat',
								value: metric.tps,
								percentage: 100,
							},
						]}
					/>;
				},
			},
		]);
	}

	customizeRowElem(action: ActionMetrics, rowElem: HTMLElement) {
		if (action.hitAttempts == 0 && action.dps == 0) {
			rowElem.classList.add('threat-metrics');
		}
	}

	getGroupedMetrics(resultData: SimResultData): Array<Array<ActionMetrics>> {
		const players = resultData.result.getRaidIndexedPlayers(resultData.filter);
		if (players.length != 1) {
			return [];
		}
		const player = players[0];

		const actions = player.getDamageActions().map(action => action.forTarget(resultData.filter));
		const actionGroups = ActionMetrics.groupById(actions);
		const petsByName = bucket(player.pets, pet => pet.name);

		const petGroups = Object.values(petsByName).map(pets =>
			ActionMetrics.joinById(
				pets.flatMap(pet => pet.getDamageActions().map(action => action.forTarget(resultData.filter))),
				true,
			),
		);

		return actionGroups.concat(petGroups);
	}

	mergeMetrics(metrics: Array<ActionMetrics>): ActionMetrics {
		const isCastSpellType = metrics.some(m => m.spellType === SpellType.SpellTypeCast);
		const isDotSpellType = metrics.some(m => m.spellType === SpellType.SpellTypePeriodic);

		return ActionMetrics.merge(metrics, {
			removeTag: true,
			actionIdOverride: metrics[0]?.unit?.petActionId || undefined,
			spellTypeOverride: isCastSpellType && isDotSpellType ? SpellType.SpellTypeAll : undefined,
		});
	}

	shouldCollapse(metric: ActionMetrics): boolean {
		return !metric.unit?.isPet;
	}
}
