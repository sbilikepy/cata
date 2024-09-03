import{n as e,o as a,q as s,s as t,R as l,a7 as n,aj as i,ad as o,U as r,V as d,W as p,ak as c,X as I,w as g,Z as m,G as u,T as h,ae as f,J as S}from"./preset_utils-DFpbc2HQ.chunk.js";import{R as P}from"./suggest_reforges_action-W3vdySew.chunk.js";import{a4 as O,a5 as k,a7 as y,G as v,bI as R,bJ as w,bK as T,bO as A,bM as C,ac as D,af as H,ad as b,ae as F,ag as G,aj as M,al as W,am as L,b as j,a as x,ah as B,a6 as V,ak as q,aq as U,S as E,F as _,R as K}from"./detailed_results-CYy0djv4.chunk.js";import{W as z,P as J,D as Z}from"./presets-Cx9rEFtM.chunk.js";const N={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:74434}}},doAtValue:{const:{val:"-8.0s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:29722}}},doAtValue:{const:{val:"-2.5s"}}},{action:{castSpell:{spellId:{spellId:6353}}},doAtValue:{const:{val:"-0.5s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{or:{vals:[{auraIsActive:{auraId:{spellId:2825,tag:-1}}},{spellCanCast:{spellId:{spellId:77801}}}]}},castSpell:{spellId:{spellId:77801}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:74241}}},{auraIsActive:{auraId:{spellId:89091}}},{auraIsActive:{auraId:{spellId:75170}}}]}},sequence:{name:"Doomguard",actions:[{castSpell:{spellId:{spellId:18540}}}]}}},{action:{condition:{spellIsReady:{spellId:{spellId:74434}}},castSpell:{spellId:{spellId:74434}}}},{action:{condition:{or:{vals:[{auraIsActive:{auraId:{spellId:74434}}},{auraIsActive:{auraId:{spellId:47221}}},{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:18120}}},rhs:{const:{val:"3s"}}}}]}},castSpell:{spellId:{spellId:6353}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:603}}},rhs:{dotTickFrequency:{spellId:{spellId:603}}}}},castSpell:{spellId:{spellId:603}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:348,tag:1}}},rhs:{math:{op:"OpAdd",lhs:{spellCastTime:{spellId:{spellId:348}}},rhs:{dotTickFrequency:{spellId:{spellId:348,tag:1}}}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"5s"}}}}]}},{and:{vals:[{cmp:{op:"OpLt",lhs:{auraRemainingTime:{auraId:{spellId:2825,tag:-1}}},rhs:{const:{val:"2s"}}}},{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:348,tag:1}}},rhs:{const:{val:"12s"}}}},{auraIsActive:{auraId:{spellId:2825,tag:-1}}}]}}]}},castSpell:{spellId:{spellId:348}}}},{action:{condition:{spellCanCast:{spellId:{spellId:17962}}},castSpell:{spellId:{spellId:17962}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{dotRemainingTime:{spellId:{spellId:172}}},rhs:{dotTickFrequency:{spellId:{spellId:172}}}}},castSpell:{spellId:{spellId:172}}}},{action:{condition:{spellIsReady:{spellId:{spellId:50796}}},castSpell:{spellId:{spellId:50796}}}},{action:{condition:{spellCanCast:{spellId:{spellId:47897}}},castSpell:{spellId:{spellId:47897}}}},{action:{condition:{and:{vals:[{isExecutePhase:{threshold:"E20"}},{spellCanCast:{spellId:{spellId:17877}}}]}},castSpell:{spellId:{spellId:17877}}}},{action:{condition:{and:{vals:[{auraIsKnown:{auraId:{spellId:89937}}},{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:89937}}},rhs:{const:{val:"1"}}}}]}},castSpell:{spellId:{spellId:77799}}}},{action:{castSpell:{spellId:{spellId:29722}}}},{action:{castSpell:{spellId:{spellId:1454}}}}]},X={items:[{id:60237,enchant:4207,gems:[68780,52217],reforging:144},{id:69882,randomSuffix:-129,reforging:145},{id:65263,enchant:4200,gems:[52207]},{id:60232,enchant:4115,gems:[52207],reforging:165},{id:65262,enchant:4102,gems:[52207,52217],reforging:144},{id:65138,enchant:4257,gems:[0],reforging:165},{id:65259,enchant:4107,gems:[52207,0],reforging:144},{id:65034,gems:[52207,52207],reforging:144},{id:65261,enchant:4112,gems:[52208,52207]},{id:65069,enchant:4104,gems:[52207],reforging:165},{id:65123,reforging:165},{id:65373,randomSuffix:-114,reforging:167},{id:65053,reforging:145},{id:62047,reforging:165},{id:68132,randomSuffix:-114,enchant:4097,reforging:167},{id:65133,enchant:4091},{id:59460,reforging:167}]},Q={items:[{id:51231,enchant:3820,gems:[41285,40133]},{id:50658,gems:[40153]},{id:51234,enchant:3810,gems:[40152]},{id:50628,enchant:3722,gems:[40152]},{id:51233,enchant:3832,gems:[40113,40155]},{id:50651,enchant:2332,gems:[40155,0]},{id:51230,enchant:3604,gems:[40113,0]},{id:50613,gems:[40133,40113,40113]},{id:50694,enchant:3719,gems:[40113,40113,40113]},{id:50699,enchant:4223,gems:[40133,40113]},{id:50664,gems:[40113]},{id:50398,gems:[40155]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40153]}]},Y=e("Pre-raid Preset",{items:[]}),$=e("P1 Preset",X),ee=e("P4 Wrath",Q,{tooltip:"This gear preset is inspired from Zephan's Affliction guide: https://www.warcrafttavern.com/wotlk/guides/pve-affliction-warlock/"}),ae=a("Destro",N),se=s("P1",O.fromMap({[k.StatIntellect]:1.25,[k.StatSpellPower]:1,[k.StatHitRating]:.87,[k.StatCritRating]:.48,[k.StatHasteRating]:.55,[k.StatMasteryRating]:.47})),te={name:"Destruction",data:y.create({talentsString:"003-03202-3320202312201312211",glyphs:v.create({prime1:R.GlyphOfConflagrate,prime2:R.GlyphOfImmolate,prime3:R.GlyphOfImp,major1:w.GlyphOfLifeTap,major2:w.GlyphOfSoulLink,major3:w.GlyphOfHealthstone,minor1:T.GlyphOfDrainSoul,minor2:T.GlyphOfRitualOfSouls,minor3:T.GlyphOfUnendingBreath})})},le=A.create({classOptions:{summon:C.Imp,detonateSeed:!1}}),ne=D.create({defaultPotion:H.VolcanicPotion,prepopPotion:H.VolcanicPotion,flask:b.FlaskOfTheDraconicMind,food:F.FoodSeafoodFeast,tinkerHands:G.TinkerHandsSynapseSprings,explosiveBigDaddy:!1}),ie=M.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),oe=W.create({vampiricTouch:!0,darkIntent:!0}),re=L.create({bloodFrenzy:!0,sunderArmor:!0,ebonPlaguebringer:!0,mangle:!0,criticalMass:!1,demoralizingShout:!0,frostFever:!0}),de={distanceFromTarget:25,profession1:j.Engineering,profession2:j.Tailoring,channelClipDelay:150,duration:180,durationVariation:30,darkIntentUptime:90},pe=z,ce=t(E.SpecDestructionWarlock,{cssClass:"destruction-warlock-sim-ui",cssScheme:x.getCssClass(x.Warlock),knownIssues:[],epStats:[k.StatIntellect,k.StatSpellPower,k.StatHitRating,k.StatCritRating,k.StatHasteRating,k.StatMasteryRating],epReferenceStat:k.StatSpellPower,displayStats:B.createDisplayStatArray([k.StatHealth,k.StatMana,k.StatStamina,k.StatIntellect,k.StatSpellPower,k.StatMasteryRating,k.StatMP5],[V.PseudoStatSpellHitPercent,V.PseudoStatSpellCritPercent,V.PseudoStatSpellHastePercent]),defaults:{gear:$.gear,epWeights:se.epWeights,statCaps:(new O).withPseudoStat(V.PseudoStatSpellHitPercent,17),consumes:ne,talents:te.data,specOptions:le,raidBuffs:ie,partyBuffs:q.create({}),individualBuffs:oe,debuffs:re,other:de},playerIconInputs:[J()],includeBuffDebuffInputs:[l,n,i,o,r,d,p,c,I],excludeBuffDebuffInputs:[],petConsumeInputs:[],otherInputs:{inputs:[Z(),g,m,u,h,f]},itemSwapSlots:[U.ItemSlotMainHand,U.ItemSlotOffHand,U.ItemSlotRanged],encounterPicker:{showExecuteProportion:!1},presets:{epWeights:[se],talents:[te],rotations:[ae],gear:[Y,$,ee]},autoRotation:e=>ae.rotation.rotation,raidSimPresets:[{spec:E.SpecDestructionWarlock,talents:te.data,specOptions:le,consumes:ne,defaultFactionRaces:{[_.Unknown]:K.RaceUnknown,[_.Alliance]:K.RaceHuman,[_.Horde]:K.RaceOrc},defaultGear:{[_.Unknown]:{},[_.Alliance]:{1:Y.gear,2:$.gear,3:ee.gear},[_.Horde]:{1:Y.gear,2:$.gear,3:ee.gear}},otherDefaults:de}]});class Ie extends S{constructor(e,a){super(e,a,ce),a.sim.waitForInit().then((()=>{new P(this,{statSelectionPresets:pe})}))}}export{Ie as D};
