import{n as t,o as e,q as a,s,U as n,a2 as i,t as o,a7 as r,F as l,w as p,J as c}from"./preset_utils-DFpbc2HQ.chunk.js";import{R as d}from"./suggest_reforges_action-W3vdySew.chunk.js";import{a4 as u,a5 as g,a6 as h,ao as m,an as S,a7 as f,G as I,bo as P,bp as y,bq as O,br as v,ac as A,af as H,aH as R,ad as b,ae as E,a as T,ah as k,ai as w,aI as C,aJ as x,aj as G,ak as M,al as D,am as F,aq as j,S as B,F as q,R as L}from"./detailed_results-CYy0djv4.chunk.js";import{A as W,M as U,O as _,T as z}from"./inputs-7Zihjxnw.chunk.js";const J={type:"TypeAPL",prepullActions:[{action:{activateAura:{auraId:{spellId:1784}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:703}}}}},castSpell:{spellId:{spellId:703}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:5171}}}}},castSpell:{spellId:{spellId:5171}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:5171}}},rhs:{const:{val:"1s"}}}},{auraIsActive:{auraId:{spellId:5171}}}]}},castSpell:{spellId:{spellId:32645}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:1943}}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:1943}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"6"}}}},{not:{val:{dotIsActive:{spellId:{spellId:1943}}}}}]}},castSpell:{spellId:{spellId:1943}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:58427}}}}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}}]}},castSpell:{spellId:{spellId:14177}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{or:{vals:[{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:32645}}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"55"}}}}]}},{and:{vals:[{auraIsActive:{auraId:{spellId:32645}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"80"}}}}]}}]}},{not:{val:{isExecutePhase:{threshold:"E35"}}}}]}},castSpell:{spellId:{spellId:32645}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{or:{vals:[{and:{vals:[{auraIsActive:{auraId:{spellId:32645}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"65"}}}}]}},{not:{val:{auraIsActive:{auraId:{spellId:32645}}}}}]}},{isExecutePhase:{threshold:"E35"}}]}},castSpell:{spellId:{spellId:32645}}}},{action:{condition:{and:{vals:[{isExecutePhase:{threshold:"E35"}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}}]}},castSpell:{spellId:{spellId:53}}}},{action:{condition:{and:{vals:[{not:{val:{isExecutePhase:{threshold:"E35"}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"3"}}}}]}},castSpell:{spellId:{spellId:1329}}}}]},V={items:[{id:65241,enchant:4209,gems:[68778,52220],reforging:146},{id:65107,reforging:151},{id:65243,enchant:4204,gems:[52220],reforging:146},{id:69884,randomSuffix:-136,enchant:1099,reforging:151},{id:65239,enchant:4102,gems:[52212,52220],reforging:151},{id:65050,enchant:4258,gems:[0],reforging:144},{id:65240,enchant:4107,gems:[52212,0],reforging:153},{id:60231,gems:[52220,52212,52212],reforging:144},{id:65381,randomSuffix:-202,enchant:4126,gems:[52212,52220],reforging:153},{id:65144,enchant:4076,gems:[52212],reforging:153},{id:65367,randomSuffix:-136},{id:65082,reforging:147},{id:65026},{id:58181},{id:65081,enchant:4099},{id:68600,enchant:4099,reforging:144},{id:65095,reforging:146}]},K=t("P1 Assassination",{items:[{id:65241,enchant:4209,gems:[68778,52220],reforging:147},{id:65107,reforging:151},{id:65243,enchant:4204,gems:[52220],reforging:144},{id:69884,randomSuffix:-136,enchant:1099,reforging:151},{id:65239,enchant:4102,gems:[52212,52220],reforging:154},{id:65050,enchant:4258,gems:[0],reforging:144},{id:65240,enchant:4107,gems:[52212,0],reforging:154},{id:60231,gems:[52220,52212,52212],reforging:144},{id:65381,randomSuffix:-202,enchant:4126,gems:[52212,52220]},{id:65144,enchant:4076,gems:[52212]},{id:65367,randomSuffix:-136},{id:65082,reforging:147},{id:65026},{id:58181},{id:65081,enchant:4099,reforging:160},{id:68600,enchant:4099,reforging:144},{id:65095,reforging:144}]}),N=t("P1 Expertise",V),Q=e("Assassination",J),X=a("P1",u.fromMap({[g.StatAgility]:2.58,[g.StatStrength]:1.05,[g.StatAttackPower]:1,[g.StatCritRating]:.88,[g.StatHitRating]:2.74,[g.StatHasteRating]:1.1,[g.StatMasteryRating]:1.23,[g.StatExpertiseRating]:1.04},{[h.PseudoStatMainHandDps]:2.49,[h.PseudoStatOffHandDps]:1,[h.PseudoStatSpellHitPercent]:1.31*m,[h.PseudoStatPhysicalHitPercent]:1.43*S})),Y=a("P1 Expertise",u.fromMap({[g.StatAgility]:2.58,[g.StatStrength]:1.05,[g.StatAttackPower]:1,[g.StatCritRating]:.88,[g.StatHitRating]:2.74,[g.StatHasteRating]:1.1,[g.StatMasteryRating]:1.23,[g.StatExpertiseRating]:2},{[h.PseudoStatMainHandDps]:2.49,[h.PseudoStatOffHandDps]:1,[h.PseudoStatSpellHitPercent]:1.31*m,[h.PseudoStatPhysicalHitPercent]:1.43*S})),Z={name:"Assassination 31/2/8",data:f.create({talentsString:"0333230013122110321-002-203003",glyphs:I.create({prime1:P.GlyphOfMutilate,prime2:P.GlyphOfBackstab,prime3:P.GlyphOfRupture,major1:y.GlyphOfFeint,major2:y.GlyphOfTricksOfTheTrade,major3:y.GlyphOfSprint})})},$=O.create({classOptions:{mhImbue:v.DeadlyPoison,ohImbue:v.InstantPoison,thImbue:v.DeadlyPoison,applyPoisonsManually:!1,startingOverkillDuration:20,vanishBreakTime:.1}}),tt=A.create({defaultPotion:H.PotionOfTheTolvir,prepopPotion:H.PotionOfTheTolvir,defaultConjured:R.ConjuredRogueThistleTea,flask:b.FlaskOfTheWinds,food:E.FoodSkeweredEel}),et={distanceFromTarget:5,duration:240,durationVariation:20},at=s(B.SpecAssassinationRogue,{cssClass:"assassination-rogue-sim-ui",cssScheme:T.getCssClass(T.Rogue),knownIssues:["Rotations are not fully optimized, especially for non-standard setups."],epStats:[g.StatAgility,g.StatStrength,g.StatAttackPower,g.StatHitRating,g.StatCritRating,g.StatHasteRating,g.StatMasteryRating,g.StatExpertiseRating],epPseudoStats:[h.PseudoStatMainHandDps,h.PseudoStatOffHandDps,h.PseudoStatPhysicalHitPercent,h.PseudoStatSpellHitPercent],epReferenceStat:g.StatAttackPower,displayStats:k.createDisplayStatArray([g.StatHealth,g.StatStamina,g.StatAgility,g.StatStrength,g.StatAttackPower,g.StatMasteryRating,g.StatExpertiseRating],[h.PseudoStatPhysicalHitPercent,h.PseudoStatSpellHitPercent,h.PseudoStatPhysicalCritPercent,h.PseudoStatSpellCritPercent,h.PseudoStatMeleeHastePercent]),defaults:{gear:K.gear,epWeights:X.epWeights,statCaps:(new u).withStat(g.StatExpertiseRating,26*w),softCapBreakpoints:(()=>{const t=C.fromPseudoStat(h.PseudoStatSpellHitPercent,{breakpoints:[17],capType:x.TypeSoftCap,postCapEPs:[0]});return[C.fromPseudoStat(h.PseudoStatPhysicalHitPercent,{breakpoints:[8,27],capType:x.TypeSoftCap,postCapEPs:[.7*S,0]}),t]})(),other:et,consumes:tt,talents:Z.data,specOptions:$,raidBuffs:G.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:M.create({}),individualBuffs:D.create({}),debuffs:F.create({mangle:!0,sunderArmor:!0,earthAndMoon:!0,bloodFrenzy:!0,shadowAndFlame:!0})},playerInputs:{inputs:[W()]},playerIconInputs:[U(),_(),z()],includeBuffDebuffInputs:[n,i,o,r],excludeBuffDebuffInputs:[],otherInputs:{inputs:[l,p]},itemSwapSlots:[j.ItemSlotMainHand,j.ItemSlotOffHand],encounterPicker:{showExecuteProportion:!0},presets:{epWeights:[X,Y],talents:[Z],rotations:[Q],gear:[K,N]},autoRotation:t=>{t.sim.encounter.targets.length;return Q.rotation.rotation},raidSimPresets:[{spec:B.SpecAssassinationRogue,talents:Z.data,specOptions:$,consumes:tt,defaultFactionRaces:{[q.Unknown]:L.RaceUnknown,[q.Alliance]:L.RaceHuman,[q.Horde]:L.RaceOrc},defaultGear:{[q.Unknown]:{},[q.Alliance]:{1:K.gear},[q.Horde]:{1:K.gear}},otherDefaults:et}]});class st extends c{constructor(t,e){super(t,e,at),e.sim.waitForInit().then((()=>{new d(this)})),this.player.changeEmitter.on((t=>{const e=this.player.getSpecOptions();if(!e.classOptions.applyPoisonsManually){const t=this.player.getGear().getEquippedItem(j.ItemSlotMainHand)?.item.weaponSpeed,a=this.player.getGear().getEquippedItem(j.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===t||void 0===a)return;t<=a?(e.classOptions.mhImbue=v.DeadlyPoison,e.classOptions.ohImbue=v.InstantPoison):(e.classOptions.mhImbue=v.InstantPoison,e.classOptions.ohImbue=v.DeadlyPoison)}this.player.setSpecOptions(t,e)})),this.sim.encounter.changeEmitter.on((t=>{const e=this.player.getSpecOptions();if(!e.classOptions.applyPoisonsManually){const t=this.player.getGear().getEquippedItem(j.ItemSlotMainHand)?.item.weaponSpeed,a=this.player.getGear().getEquippedItem(j.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===t||void 0===a)return;t<=a?(e.classOptions.mhImbue=v.DeadlyPoison,e.classOptions.ohImbue=v.InstantPoison):(e.classOptions.mhImbue=v.InstantPoison,e.classOptions.ohImbue=v.DeadlyPoison)}this.player.setSpecOptions(t,e)}))}}export{st as A};