import{a3 as e}from"./preset_utils-DFpbc2HQ.chunk.js";import{A as s,n as t,U as a}from"./detailed_results-CYy0djv4.chunk.js";const n=()=>e({fieldName:"innervateTarget",id:s.fromSpellId(29166),extraCssClasses:["within-raid-sim-hide"],getValue:e=>e.getClassOptions().innervateTarget?.type==t.Player,setValue:(e,s,n)=>{const r=s.getClassOptions();r.innervateTarget=a.create({type:n?t.Player:t.Unknown,index:0}),s.setClassOptions(e,r)}});export{n as S};