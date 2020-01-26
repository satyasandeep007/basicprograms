let arm=0,a,num,temp;
num=153;
temp=num;

while (temp>0) {
    a = temp%10;
    temp=parseInt(temp/10);
    arm = arm + a*a*a;
}
if (arm===num) {
    console.log('Arm');
} else {
    console.log('no');   
}