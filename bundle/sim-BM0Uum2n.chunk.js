import{n as e,o as s,q as a,s as t,t as l,w as n,T as i,F as r,J as o}from"./preset_utils-DFpbc2HQ.chunk.js";import{R as c}from"./suggest_reforges_action-W3vdySew.chunk.js";import{a4 as p,a5 as d,a6 as g,a7 as h,G as m,bP as u,bQ as I,bR as f,bS as S,ac as v,ad as O,ae as P,af as A,ag as T,b as y,a as R,ah as k,ai as G,aj as w,ak as x,al as C,am as E,S as b,F as H,R as B}from"./detailed_results-CYy0djv4.chunk.js";import{S as L,a as W}from"./inputs-CRnuAMmT.chunk.js";const F={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:2457}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{spellId:6673}}},doAtValue:{const:{val:"-1.5s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-0.1s"}}},{action:{castSpell:{spellId:{spellId:100}}},doAtValue:{const:{val:"-0.1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:46924}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{numberTargets:{}},rhs:{const:{val:"1"}}}},castSpell:{spellId:{spellId:12328}}}},{action:{condition:{const:{val:"false"}},castSpell:{spellId:{spellId:64382}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpLt",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"130s"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"130s"}}}},{isExecutePhase:{threshold:"E20"}}]}}]}},castSpell:{spellId:{spellId:33697}}}},{action:{condition:{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"1.5s"}}}},castSpell:{spellId:{spellId:1719}}}},{action:{condition:{or:{vals:[{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"1.5s"}}}},{cmp:{op:"OpLt",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"130s"}}}}]}},{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"119s"}}}},{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"130s"}}}},{isExecutePhase:{threshold:"E20"}}]}}]}},castSpell:{spellId:{spellId:85730}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{currentTime:{}},rhs:{const:{val:"1.5s"}}}}]}},castSpell:{spellId:{spellId:1134}}}},{action:{condition:{isExecutePhase:{threshold:"E20"}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpGt",lhs:{currentRage:{}},rhs:{const:{val:"75"}}}},{auraIsActive:{auraId:{spellId:85730}}},{auraIsActiveWithReactionTime:{auraId:{spellId:12964}}},{and:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:85730}}},rhs:{const:{val:"1s"}}}},{not:{val:{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:1719}}},rhs:{const:{val:"1s"}}}}}},{cmp:{op:"OpGt",lhs:{currentRage:{}},rhs:{const:{val:"30"}}}},{not:{val:{cmp:{op:"OpLt",lhs:{remainingTime:{}},rhs:{const:{val:"130s"}}}}}}]}}]}},castSpell:{spellId:{spellId:78}}}},{action:{condition:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}},castSpell:{spellId:{spellId:6544}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:772}}}}},{not:{val:{auraIsActive:{auraId:{spellId:2457}}}}}]}},strictSequence:{actions:[{castSpell:{spellId:{spellId:2457}}},{castSpell:{spellId:{spellId:772}}}]}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:772}}}}},castSpell:{spellId:{spellId:772}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:60503}}},{not:{val:{isExecutePhase:{threshold:"E20"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:60503}}},rhs:{const:{val:"5.5s"}}}}]}},castSpell:{spellId:{spellId:2457}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:60503}}},{not:{val:{isExecutePhase:{threshold:"E20"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:60503}}},rhs:{const:{val:"5.5s"}}}}]}},castSpell:{spellId:{spellId:7384}}}},{hide:!0,action:{castSpell:{spellId:{spellId:12294}}}},{action:{condition:{or:{vals:[{not:{val:{isExecutePhase:{threshold:"E20"}}}},{cmp:{op:"OpLe",lhs:{auraRemainingTime:{auraId:{spellId:84586}}},rhs:{const:{val:"1.5s"}}}},{not:{val:{auraIsActive:{auraId:{spellId:57519}}}}}]}},castSpell:{spellId:{spellId:12294}}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}}}},castSpell:{spellId:{spellId:86346}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:60503}}},{gcdIsReady:{}},{not:{val:{spellCanCast:{spellId:{spellId:12294}}}}},{not:{val:{spellCanCast:{spellId:{spellId:86346}}}}},{cmp:{op:"OpGe",lhs:{currentRage:{}},rhs:{const:{val:"5"}}}}]}},castSpell:{spellId:{spellId:2457}}}},{action:{condition:{auraIsActive:{auraId:{spellId:60503}}},castSpell:{spellId:{spellId:7384}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:60503}}}}},{gcdIsReady:{}}]}},castSpell:{spellId:{spellId:2458}}}},{action:{castSpell:{spellId:{spellId:5308}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{auraRemainingTime:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:86346}}},rhs:{const:{val:"1.5s"}}}},castSpell:{spellId:{spellId:86346}}}},{action:{castSpell:{spellId:{spellId:1464}}}},{action:{castSpell:{spellId:{spellId:2458}}}},{action:{castSpell:{spellId:{spellId:18499}}}},{action:{castSpell:{spellId:{spellId:6673}}}}]},D={items:[{id:65266,enchant:4208,gems:[68779,52222],reforging:152},{id:69885,randomSuffix:-120,reforging:140},{id:65268,enchant:4202,gems:[52206],reforging:152},{id:69879,randomSuffix:-120,enchant:4100,reforging:139},{id:65264,enchant:4102,gems:[52206,52213],reforging:151},{id:60228,enchant:4256,gems:[52222,52206],reforging:154},{id:65265,enchant:4106,gems:[52206,52206],reforging:152},{id:65040,gems:[52206,52206],reforging:140},{id:65379,randomSuffix:-173,enchant:4126,gems:[52206,52213],reforging:139},{id:65075,enchant:4094,gems:[52206],reforging:166},{id:60226,gems:[52222]},{id:65382,randomSuffix:-120,reforging:140},{id:65072,reforging:159},{id:59461},{id:65003,enchant:4099,reforging:140},{},{id:60210,reforging:159}]},M={items:[{id:65266,enchant:4208,gems:[68779,52222],reforging:152},{id:69885,randomSuffix:-120,reforging:139},{id:65268,enchant:4202,gems:[52206],reforging:152},{id:65117,enchant:4100,reforging:154},{id:65264,enchant:4102,gems:[52206,52213],reforging:154},{id:60228,enchant:4256,gems:[52222,52206],reforging:151},{id:65071,enchant:4106,gems:[52206,52206],reforging:151},{id:65040,gems:[52206,52206],reforging:139},{id:65267,enchant:4126,gems:[52206,52206],reforging:166},{id:65075,enchant:4104,gems:[52206],reforging:166},{id:60226,gems:[52222]},{id:65382,randomSuffix:-120,reforging:140},{id:65072,reforging:159},{id:59461},{id:65003,enchant:4099,reforging:140},{},{id:60210,reforging:166}]},j=e("Preraid Arms",{items:[{id:59359,enchant:4208,gems:[68779,59489,59478]},{id:62447,reforging:151},{id:58100,enchant:4202,gems:[52206],reforging:159},{id:67140,enchant:4100,reforging:153},{id:55060,enchant:4102,gems:[52206],reforging:168},{id:56301,enchant:4256,gems:[52206]},{id:58099,enchant:4106,gems:[52206,52206],reforging:168},{id:62384,gems:[52206,52206],reforging:165},{id:67141,enchant:4126,gems:[52206,52206],reforging:152},{id:56381,enchant:4104,gems:[52206]},{id:56415},{id:56365,reforging:161},{id:58180,reforging:137},{id:62049},{id:64377,enchant:4099,reforging:139},{},{id:59367,gems:[52206],reforging:151}]}),U=e("P1 Arms - BIS",D),V=e("P1 Arms - Realistic",M),_=s("Arms",F),q=a("P1",p.fromMap({[d.StatStrength]:2.21,[d.StatAgility]:1.12,[d.StatAttackPower]:1,[d.StatExpertiseRating]:1.75,[d.StatHitRating]:2.77,[d.StatCritRating]:1.45,[d.StatHasteRating]:.68,[d.StatMasteryRating]:.89},{[g.PseudoStatMainHandDps]:9.22,[g.PseudoStatOffHandDps]:0})),z={name:"Arms",data:h.create({talentsString:"30220303120212312211-0322-3",glyphs:m.create({prime1:u.GlyphOfMortalStrike,prime2:u.GlyphOfOverpower,prime3:u.GlyphOfSlam,major1:I.GlyphOfCleaving,major2:I.GlyphOfSweepingStrikes,major3:I.GlyphOfThunderClap,minor1:f.GlyphOfBerserkerRage,minor2:f.GlyphOfCommand,minor3:f.GlyphOfBattle})})},J=S.create({classOptions:{startingRage:0}}),K=v.create({flask:O.FlaskOfTitanicStrength,food:P.FoodBeerBasedCrocolisk,defaultPotion:A.GolembloodPotion,prepopPotion:A.GolembloodPotion,tinkerHands:T.TinkerHandsSynapseSprings}),Q={profession1:y.Engineering,profession2:y.Blacksmithing,distanceFromTarget:5},N=t(b.SpecArmsWarrior,{cssClass:"arms-warrior-sim-ui",cssScheme:R.getCssClass(R.Warrior),knownIssues:[],epStats:[d.StatStrength,d.StatAgility,d.StatAttackPower,d.StatExpertiseRating,d.StatHitRating,d.StatCritRating,d.StatHasteRating,d.StatMasteryRating],epPseudoStats:[g.PseudoStatMainHandDps,g.PseudoStatOffHandDps],epReferenceStat:d.StatAttackPower,displayStats:k.createDisplayStatArray([d.StatHealth,d.StatStamina,d.StatStrength,d.StatAgility,d.StatAttackPower,d.StatExpertiseRating,d.StatMasteryRating],[g.PseudoStatPhysicalHitPercent,g.PseudoStatPhysicalCritPercent,g.PseudoStatMeleeHastePercent]),defaults:{gear:U.gear,epWeights:q.epWeights,statCaps:(()=>{const e=(new p).withPseudoStat(g.PseudoStatPhysicalHitPercent,8),s=(new p).withStat(d.StatExpertiseRating,26*G);return e.add(s)})(),other:Q,consumes:K,talents:z.data,specOptions:J,raidBuffs:w.create({arcaneBrilliance:!0,bloodlust:!0,markOfTheWild:!0,icyTalons:!0,moonkinForm:!0,leaderOfThePack:!0,powerWordFortitude:!0,strengthOfEarthTotem:!0,trueshotAura:!0,wrathOfAirTotem:!0,demonicPact:!0,blessingOfKings:!0,blessingOfMight:!0,communion:!0}),partyBuffs:x.create({}),individualBuffs:C.create({}),debuffs:E.create({bloodFrenzy:!0,mangle:!0,sunderArmor:!0,curseOfWeakness:!0,ebonPlaguebringer:!0})},playerIconInputs:[],includeBuffDebuffInputs:[l],excludeBuffDebuffInputs:[],otherInputs:{inputs:[L(),W(),n,i,r]},encounterPicker:{showExecuteProportion:!0},presets:{epWeights:[q],talents:[z],rotations:[_],gear:[j,U,V]},autoRotation:e=>_.rotation.rotation,raidSimPresets:[{spec:b.SpecArmsWarrior,talents:z.data,specOptions:J,consumes:K,defaultFactionRaces:{[H.Unknown]:B.RaceUnknown,[H.Alliance]:B.RaceWorgen,[H.Horde]:B.RaceOrc},defaultGear:{[H.Unknown]:{},[H.Alliance]:{1:U.gear},[H.Horde]:{1:U.gear}},otherDefaults:Q}]});class X extends o{constructor(e,s){super(e,s,N),s.sim.waitForInit().then((()=>{new c(this)}))}}export{X as A};