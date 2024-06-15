import { ConjuredHealthstone, TinkerHandsSynapseSprings } from '../../core/components/inputs/consumables';
import * as PresetUtils from '../../core/preset_utils';
import { Consumes, Flask, Food, Glyphs, Potions, Profession, PseudoStat, RotationType, Spec, Stat } from '../../core/proto/common';
import {
	BeastMasteryHunter_Options as BeastMasteryOptions,
	BeastMasteryHunter_Rotation as BeastMasteryRotation,
	HunterMajorGlyph as MajorGlyph,
	HunterOptions_PetType as PetType,
	HunterPrimeGlyph as PrimeGlyph,
	HunterStingType as StingType,
} from '../../core/proto/hunter';
import { SavedTalents } from '../../core/proto/ui';
import { Stats } from '../../core/proto_utils/stats';
import AoeApl from './apls/aoe.apl.json';
import BmApl from './apls/bm.apl.json';
import P1BMGear from './gear_sets/p1_bm.gear.json';
import PreraidBMGear from './gear_sets/preraid_bm.gear.json';

// Preset options for this spec.
// Eventually we will import these values for the raid sim too, so its good to
// keep them in a separate file.

export const BM_PRERAID_PRESET = PresetUtils.makePresetGear('BM PreRaid Preset', PreraidBMGear);
export const BM_P1_PRESET = PresetUtils.makePresetGear('BM P1 Preset', P1BMGear);

export const DefaultSimpleRotation = BeastMasteryRotation.create({
	type: RotationType.SingleTarget,
	sting: StingType.SerpentSting,
	trapWeave: true,
	multiDotSerpentSting: true,
	allowExplosiveShotDownrank: true,
});

export const ROTATION_PRESET_SIMPLE_DEFAULT = PresetUtils.makePresetSimpleRotation('Simple Default', Spec.SpecBeastMasteryHunter, DefaultSimpleRotation);
export const ROTATION_PRESET_BM = PresetUtils.makePresetAPLRotation('BM', BmApl);
export const ROTATION_PRESET_AOE = PresetUtils.makePresetAPLRotation('AOE', AoeApl);

// Preset options for EP weights
export const P1_EP_PRESET = PresetUtils.makePresetEpWeights(
	'BM P1',
	Stats.fromMap(
		{
			[Stat.StatStamina]: 0.5,
			[Stat.StatAgility]: 2.65,
			[Stat.StatRangedAttackPower]: 1.0,
			[Stat.StatMeleeHit]: 2.12,
			[Stat.StatMeleeCrit]: 1.19,
			[Stat.StatMeleeHaste]: 0.97,
			[Stat.StatMastery]: 0.55,
		},
		{
			[PseudoStat.PseudoStatRangedDps]: 6.32,
		},
	),
);

// Default talents. Uses the wowhead calculator format, make the talents on
// https://wowhead.com/cata/talent-calc and copy the numbers in the url.

export const BeastMasteryTalents = {
	name: 'Beast Mastery',
	data: SavedTalents.create({
		talentsString: '2330230311320112121-2302-03',
		glyphs: Glyphs.create({
			prime1: PrimeGlyph.GlyphOfArcaneShot,
			prime2: PrimeGlyph.GlyphOfKillCommand,
			prime3: PrimeGlyph.GlyphOfKillShot,
			major1: MajorGlyph.GlyphOfBestialWrath,
			major2: MajorGlyph.GlyphOfRaptorStrike,
			major3: MajorGlyph.GlyphOfTrapLauncher,
		}),
	}),
};

export const BMDefaultOptions = BeastMasteryOptions.create({
	classOptions: {
		petUptime: 1,
		useHuntersMark: true,
		petType: PetType.Wolf,
		petTalents: {
			serpentSwiftness: 2,
			dash: true,
			bloodthirsty: 1,
			spikedCollar: 3,
			boarsSpeed: true,
			cullingTheHerd: 3,
			charge: true,
			spidersBite: 3,
			rabid: true,
			callOfTheWild: true,
			sharkAttack: 2,
			wildHunt: 2,
		},
	},
});

export const DefaultConsumes = Consumes.create({
	defaultPotion: Potions.PotionOfTheTolvir,
	prepopPotion: Potions.PotionOfTheTolvir,
	flask: Flask.FlaskOfTheWinds,
	defaultConjured: ConjuredHealthstone.value,
	food: Food.FoodSeafoodFeast,
	tinkerHands: TinkerHandsSynapseSprings.value,
});

export const OtherDefaults = {
	distanceFromTarget: 24,
	duration: 240,
	durationVariation: 20,
	profession1: Profession.Engineering,
	profession2: Profession.Jewelcrafting,
};
