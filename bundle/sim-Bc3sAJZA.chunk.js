import{k as t,n as e,o as a,q as s,s as n,U as o,a2 as l,t as i,a7 as r,F as p,w as c,J as d}from"./preset_utils-DFpbc2HQ.chunk.js";import{R as u}from"./suggest_reforges_action-W3vdySew.chunk.js";import{a4 as m,a5 as h,a6 as g,ao as I,an as S,a7 as f,G as v,bo as P,bp as O,bt as y,br as b,ac as T,af as C,aH as R,ad as A,ae as H,a as k,ah as w,ai as G,aI as E,aJ as L,aj as D,ak as M,al as x,am as F,aq as j,S as B,F as U,R as W}from"./detailed_results-CYy0djv4.chunk.js";import{A as q,M as V,O as _,T as z,a as J}from"./inputs-7Zihjxnw.chunk.js";const N=t({fieldName:"honorAmongThievesCritRate",label:"Honor of Thieves Crit Rate",labelTooltip:"Number of crits other group members generate within 100 seconds",showWhen:t=>t.getTalents().honorAmongThieves>0}),K={prepullActions:[{action:{activateAura:{auraId:{spellId:1784}}},doAtValue:{const:{val:"-2s"}}},{action:{activateAura:{auraId:{spellId:73651}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{spellId:14183}}},doAtValue:{const:{val:"-1s"}}},{action:{castSpell:{spellId:{spellId:5171}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:1943}}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}}]}},castSpell:{spellId:{spellId:1943}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:1943}}},rhs:{const:{val:"6"}}}}]}},castSpell:{spellId:{spellId:2098}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:73651}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}}]}},castSpell:{spellId:{spellId:73651}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:5171}}},rhs:{const:{val:"4"}}}},{cmp:{op:"OpEq",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"8"}}}},{or:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:5171}}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpLe",lhs:{currentEnergy:{}},rhs:{const:{val:"30"}}}}]}}]}},castSpell:{spellId:{spellId:5171}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:2098}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:89775}}}}},{not:{val:{auraIsActive:{auraId:{spellId:51713}}}}},{not:{val:{auraIsActive:{auraId:{spellId:1784}}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"10"}}}},{or:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"80"}}}}]}}]}}]}},castSpell:{spellId:{spellId:16511}}}},{action:{condition:{and:{vals:[{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:91023}}},{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{spellCanCast:{spellId:{spellId:8676}}}]}},castSpell:{spellId:{spellId:36554}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},{not:{val:{auraIsActive:{auraId:{spellId:1784}}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:91023}}},rhs:{const:{val:"2"}}}}]}},castSpell:{spellId:{spellId:51713}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:91023}}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpLe",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"50"}}}},{not:{val:{auraIsActive:{auraId:{spellId:51713}}}}},{not:{val:{auraIsActive:{auraId:{spellId:1784}}}}}]}},castSpell:{spellId:{spellId:1856}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"2"}}}},{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:14183}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:1943}}},rhs:{const:{val:"6"}}}},waitUntil:{condition:{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"75"}}}}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"95"}}}}]}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:51713}}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:8676}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"4"}}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{currentComboPoints:{}},rhs:{const:{val:"5"}}}},{cmp:{op:"OpGe",lhs:{currentEnergy:{}},rhs:{const:{val:"95"}}}}]}}]}},castSpell:{spellId:{spellId:53}}}},{action:{condition:{not:{val:{spellIsReady:{spellId:{spellId:1856}}}}},castSpell:{spellId:{spellId:14185}}}}]},Q=e("P1 Sub",{items:[{id:65241,enchant:4209,gems:[68778,52220],reforging:145},{id:69880,randomSuffix:-135,reforging:146},{id:65243,enchant:4204,gems:[52220],reforging:146},{id:69884,randomSuffix:-135,enchant:1099,reforging:146},{id:65239,enchant:4102,gems:[52212,52220]},{id:65050,enchant:4258,gems:[0],reforging:167},{id:65240,enchant:3222,gems:[52212,0],reforging:139},{id:60231,gems:[52220,52212,52212],reforging:167},{id:65381,randomSuffix:-200,enchant:4126,gems:[52212,52220],reforging:144},{id:65144,enchant:4105,gems:[52212],reforging:168},{id:65367,randomSuffix:-135,reforging:146},{id:65082,reforging:145},{id:65140},{id:65026},{id:65081,enchant:4099,reforging:167},{id:68600,enchant:4099,reforging:146},{id:65095,reforging:146}]}),X=a("Subtlety",K),Y=s("P1",m.fromMap({[h.StatAgility]:3.7,[h.StatStrength]:1.05,[h.StatAttackPower]:1,[h.StatCritRating]:1.1,[h.StatHitRating]:2.03,[h.StatHasteRating]:1.27,[h.StatMasteryRating]:.79,[h.StatExpertiseRating]:1.33},{[g.PseudoStatMainHandDps]:7,[g.PseudoStatOffHandDps]:1,[g.PseudoStatSpellHitPercent]:.36*I,[g.PseudoStatPhysicalHitPercent]:1.67*S})),Z={name:"Subtlety",data:f.create({talentsString:"023003-002-0332031321310012321",glyphs:v.create({prime1:P.GlyphOfBackstab,prime2:P.GlyphOfHemorrhage,prime3:P.GlyphOfSliceAndDice,major1:O.GlyphOfTricksOfTheTrade,major2:O.GlyphOfSprint,major3:O.GlyphOfFeint})})},$=y.create({classOptions:{mhImbue:b.InstantPoison,ohImbue:b.DeadlyPoison,thImbue:b.WoundPoison,applyPoisonsManually:!1,startingOverkillDuration:20,vanishBreakTime:.1},honorAmongThievesCritRate:400}),tt=T.create({defaultPotion:C.PotionOfTheTolvir,prepopPotion:C.PotionOfTheTolvir,defaultConjured:R.ConjuredRogueThistleTea,flask:A.FlaskOfTheWinds,food:H.FoodSkeweredEel}),et={distanceFromTarget:5,duration:240,durationVariation:20},at=n(B.SpecSubtletyRogue,{cssClass:"subtlety-rogue-sim-ui",cssScheme:k.getCssClass(k.Rogue),knownIssues:["Rotations are not fully optimized, especially for non-standard setups."],epStats:[h.StatAgility,h.StatStrength,h.StatAttackPower,h.StatHitRating,h.StatCritRating,h.StatHasteRating,h.StatMasteryRating,h.StatExpertiseRating],epPseudoStats:[g.PseudoStatMainHandDps,g.PseudoStatOffHandDps,g.PseudoStatPhysicalHitPercent,g.PseudoStatSpellHitPercent],epReferenceStat:h.StatAttackPower,displayStats:w.createDisplayStatArray([h.StatHealth,h.StatStamina,h.StatAgility,h.StatStrength,h.StatAttackPower,h.StatMasteryRating,h.StatExpertiseRating],[g.PseudoStatPhysicalHitPercent,g.PseudoStatSpellHitPercent,g.PseudoStatPhysicalCritPercent,g.PseudoStatSpellCritPercent,g.PseudoStatMeleeHastePercent]),defaults:{gear:Q.gear,epWeights:Y.epWeights,statCaps:(new m).withStat(h.StatExpertiseRating,26*G),softCapBreakpoints:(()=>{const t=E.fromPseudoStat(g.PseudoStatSpellHitPercent,{breakpoints:[17],capType:L.TypeSoftCap,postCapEPs:[0]});return[E.fromPseudoStat(g.PseudoStatPhysicalHitPercent,{breakpoints:[8,27],capType:L.TypeSoftCap,postCapEPs:[.77*S,0]}),t]})(),other:et,consumes:tt,talents:Z.data,specOptions:$,raidBuffs:D.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:M.create({}),individualBuffs:x.create({}),debuffs:F.create({mangle:!0,sunderArmor:!0,shadowAndFlame:!0,earthAndMoon:!0,bloodFrenzy:!0})},playerInputs:{inputs:[q()]},playerIconInputs:[V(),_(),z()],includeBuffDebuffInputs:[o,l,i,r],excludeBuffDebuffInputs:[],otherInputs:{inputs:[J(),N,p,c]},itemSwapSlots:[j.ItemSlotMainHand,j.ItemSlotOffHand],encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[Y],talents:[Z],rotations:[X],gear:[Q]},autoRotation:t=>{t.sim.encounter.targets.length;return X.rotation.rotation},raidSimPresets:[{spec:B.SpecSubtletyRogue,talents:Z.data,specOptions:$,consumes:tt,defaultFactionRaces:{[U.Unknown]:W.RaceUnknown,[U.Alliance]:W.RaceHuman,[U.Horde]:W.RaceOrc},defaultGear:{[U.Unknown]:{},[U.Alliance]:{1:Q.gear},[U.Horde]:{1:Q.gear}},otherDefaults:et}]});class st extends d{constructor(t,e){super(t,e,at),e.sim.waitForInit().then((()=>{new u(this)})),this.player.changeEmitter.on((t=>{const e=this.player.getSpecOptions();if(!e.classOptions.applyPoisonsManually){const t=this.player.getGear().getEquippedItem(j.ItemSlotMainHand)?.item.weaponSpeed,a=this.player.getGear().getEquippedItem(j.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===t||void 0===a)return;t<=a?(e.classOptions.mhImbue=b.DeadlyPoison,e.classOptions.ohImbue=b.InstantPoison):(e.classOptions.mhImbue=b.InstantPoison,e.classOptions.ohImbue=b.DeadlyPoison)}this.player.setSpecOptions(t,e)})),this.sim.encounter.changeEmitter.on((t=>{const e=this.player.getSpecOptions();if(!e.classOptions.applyPoisonsManually){const t=this.player.getGear().getEquippedItem(j.ItemSlotMainHand)?.item.weaponSpeed,a=this.player.getGear().getEquippedItem(j.ItemSlotOffHand)?.item.weaponSpeed;if(void 0===t||void 0===a)return;t<=a?(e.classOptions.mhImbue=b.DeadlyPoison,e.classOptions.ohImbue=b.InstantPoison):(e.classOptions.mhImbue=b.InstantPoison,e.classOptions.ohImbue=b.DeadlyPoison)}this.player.setSpecOptions(t,e)}))}}export{st as S};
