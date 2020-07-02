function nocSec(){
total=0;
total1=0;
total2=0;
total3=0;
total4=0;
total5=0;
total6=0;
total7=0;
total8=0;
total9=0;
total10=0;
total11=0;
total12=0;
wage=0;

if (document.getElementById('nocO').checked) {
        total = 25;
        document.getElementById("noc2o").disabled = false;
        document.getElementById("noc1o").disabled = false;
        if (document.getElementById('noc2o').checked) {
        total+=10;
        }
        else {
        total=total;
        }
        }
    else if (document.getElementById('nocA').checked) {
            total=25;
            document.getElementById("noc2o").disabled = true;
            document.getElementById("noc1o").disabled = true;
            }
    else if (document.getElementById('nocB').checked) {
            total=10;
            document.getElementById("noc2o").disabled = true;
            document.getElementById("noc1o").disabled = true;
            }
    else if (document.getElementById('nocC').checked) {
            total=5;
            document.getElementById("noc2o").disabled = true;
            document.getElementById("noc1o").disabled = true;
            }
    else if (document.getElementById('nocD').checked) {
            total=5;
            document.getElementById("noc2o").disabled = true;
            document.getElementById("noc1o").disabled = true;
            }
//            top occupation
if (document.getElementById('yes1').checked) {
        total1=10;
        }
    else if (document.getElementById('no1').checked) {
        total1=0;
        }
if(document.getElementById('yes2').checked) {
        total2=10;
        }
    else if (document.getElementById('no2').checked) {
        total2=0;
        }
//        wage and schedule
if (((document.getElementById('wage').value).length!=0) && ((document.getElementById('hour').value).length!=0)) {
    wage = Math.round((document.getElementById('wage').value)*((document.getElementById('hour').value)*52))
    if (wage==100000 && wage>100000){
    total3=50;
    }
    else if(wage<100000 && wage >975000){
    total3= 38;
    }
    else if(wage<975000 && wage >95000){
    total3=37;
    }
    else if(wage<95000 && wage >92500){
    total3=36;
    }
    else if(wage<92500 && wage >90000){
    total3=35;
    }
    else if(wage<90000 && wage>87500){
    total3=34;
    }
    else if(wage<87500 && wage >85000){
    total3=33;
    }
    else if(wage<85000 && wage>82500){
    total3=32;
    }
    else if(wage<82500 && wage >80000){
    total3=31;
    }
    else if (wage<80000&& wage>77500){
    total3=30;
    }
    else if(wage<77500 && wage >75000){
    total3=29;
    }
    else if(wage<75000 && wage>72500){
    total3=28;
    }
    else if(wage<72500 && wage >70000){
    total3=27;
    }
    else if(wage<70000 && wage>67500){
    total3=26;
    }
    else if(wage<67500 && wage >65000){
    total3=25;
    }
    else if(wage<65000 && wage>62500){
    total3=24;
    }
    else if(wage<62500 && wage >60000){
    total3=23;
    }
    else if(wage<60000 && wage >57500){
    total3=22;
    }
    else if(wage<57500 && wage >55000){
    total3=21;
    }
    else if(wage<55000 && wage >52500){
    total3=20;
    }
    else if(wage<52500 && wage >50000){
    total3=19;
    }
    else if(wage<50000 && wage >47500){
    total3=18;
    }
    else if(wage<47500 && wage >45000){
    total3=17;
    }
    else if(wage<45000 && wage >42500){
    total3=16;
    }
    else if(wage<42500 && wage >40000){
    total3=15;
    }
    else if(wage<40000 && wage >38750){
    total3=14;
    }
    else if(wage<38750 && wage >37500){
    total3=13;
    }
    else if(wage<37500 && wage >36250){
    total3=12;
    }
    else if(wage<36250 && wage >35000){
    total3=11;
    }
    else if(wage<35000 && wage >33750){
    total3=10;
    }
    else if(wage<33750 && wage >32500){
    total3=9;
    }
    else if(wage<32500 && wage >31250){
    total3=8;
    }
    else if(wage<31250 && wage >30000){
    total3=7;
    }
    else if(wage<30000 && wage >28750){
    total3=6;
    }else if(wage<28750 && wage >27500){
    total3=5;
    }
    else if(wage<27500 && wage >26250){
    total3=4;
    }else if(wage<26250 && wage >25000){
    total3=3;
    }
    else if(wage<55000){
    total3=0;
    }
    }



//experience
if (document.getElementById('exp1').checked) {
        total4=15;
        }
    else if (document.getElementById('exp2').checked) {
        total4=12;
        }
    else if (document.getElementById('exp3').checked) {
        total4=9;
        }
    else if (document.getElementById('exp4').checked) {
        total4=6;
        }
    else if (document.getElementById('exp5').checked) {
        total4=3;
        }
    else if (document.getElementById('exp6').checked) {
        total4=1;
        }
    else if (document.getElementById('exp7').checked) {
        total4=0;
        }
//bonus experience points
if (document.getElementById('bonus1').checked) {
        total5=10;
        }
    else if (document.getElementById('bonus2').checked) {
        total5=0;
        }
//area points
if (document.getElementById('area1').checked) {
        total6=10;
        }
    else if (document.getElementById('area2').checked) {
        total6=8;
        }
    else if (document.getElementById('area3').checked) {
        total6=6;
        }
    else if (document.getElementById('area4').checked) {
        total6=4;
        }
    else if (document.getElementById('area5').checked) {
        total6=2;
        }
    else if (document.getElementById('area6').checked) {
        total6=2;
        }
    else if (document.getElementById('area7').checked) {
        total6=0;
        }
//       Highest education
if (document.getElementById('edu1').checked) {
        total7=17;
        }
    else if (document.getElementById('edu2').checked) {
        total7=11;
        }
    else if (document.getElementById('edu3').checked) {
        total7=11;
        }
    else if (document.getElementById('edu4').checked) {
        total7=11;
        }
    else if (document.getElementById('edu5').checked) {
        total7=4;
        }
    else if (document.getElementById('edu6').checked) {
        total7=2;
        }
    else if (document.getElementById('edu7').checked) {
        total7=0;
        }
// canada education
if (document.getElementById('yes4').checked) {
        total8=8;
        }
    else if (document.getElementById('no4').checked) {
        total8=0;
        document.getElementById("yes5").disabled = false;
        document.getElementById("no5").disabled = false;
        }
if (document.getElementById('yes5').checked) {
        total9=6;
        }
    else if (document.getElementById('no5').checked) {
        total9=0;
        }
if (document.getElementById('yes6').checked) {
        total10=4;
        }
    else if (document.getElementById('no6').checked) {
        total10=0;
        }
if (document.getElementById('yes7').checked) {
        total11=4;
        }
    else if (document.getElementById('no7').checked) {
        total11=0;
        }
//clb
if (document.getElementById('clb10').checked) {
        total12=30;
        }
    else if (document.getElementById('clb9').checked) {
        total12=26;
        }
    else if (document.getElementById('clb8').checked) {
        total12=22;
        }
    else if (document.getElementById('clb7').checked) {
        total12=18;
        }
    else if (document.getElementById('clb6').checked) {
        total12=14;
        }
    else if (document.getElementById('clb5').checked) {
        total12=10;
        }
    else if (document.getElementById('clb4').checked) {
        total12=6;
        }
    else if (document.getElementById('clb3').checked) {
        total12=0;
        }
// total points
var sum=total+total1+total2+total3+total4+total5+total6+total7+total8+total9+total10+total11+total12;
document.getElementById('score').value=sum;
    }
//document.getElementById('score').value=total;
