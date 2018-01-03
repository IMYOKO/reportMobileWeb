//判断手机号码
function isPhoneNum(num){
    return /^0?1[3|4|5|7|8][0-9]\d{8}$/.test(num);
};