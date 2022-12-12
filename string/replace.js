const r = "go green go green";
console.log(r.replace("go","Go" ));//Go green go green
console.log(r.replace(/Green/i,"yellow"));//go yellow go green
console.log(r.replace(/Green/gi,"yellow"));//go yellow go yellow
