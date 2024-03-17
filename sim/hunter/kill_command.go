package hunter

import (
	"time"

	"github.com/wowsims/cata/sim/core"
)

func (hunter *Hunter) registerKillCommandSpell() {
	if hunter.pet == nil {
		return
	}

	actionID := core.ActionID{SpellID: 34026}
	//bonusPetSpecialCrit := 10 * core.CritRatingPerCritChance * float64(hunter.Talents.FocusedFire)


	hunter.KillCommand = hunter.RegisterSpell(core.SpellConfig{
		ActionID:    actionID,
		SpellSchool: core.SpellSchoolPhysical,
		Flags:       core.SpellFlagNoOnCastComplete,

		FocusCost: core.FocusCostOptions{
			Cost: 40, // Todo: Check if changed by other stuff
		},
		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: 1,
			},
			CD: core.Cooldown{
				Timer:    hunter.NewTimer(),
				Duration: time.Second * 6,
			},
		},
		ExtraCastCondition: func(sim *core.Simulation, target *core.Unit) bool {
			return hunter.pet.IsEnabled()
		},
		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			if hunter.Talents.KillingStreak > 0 {
				if !hunter.KillingStreakCounterAura.IsActive() {
					hunter.KillingStreakCounterAura.Activate(sim)
				}
			}
			baseDamage := 0.516*spell.RangedAttackPower(target) + 918 //Todo: fix calc
			spell.CalcAndDealDamage(sim, target, baseDamage, spell.OutcomeRangedHitAndCrit)
		},
	})

	hunter.AddMajorCooldown(core.MajorCooldown{
		Spell: hunter.KillCommand,
		Type:  core.CooldownTypeDPS,
	})
}
