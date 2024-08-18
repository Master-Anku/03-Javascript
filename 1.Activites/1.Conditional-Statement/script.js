// အမည်အသစ်ကြေငြာပီး တန်ဖိုးများ သတ်မှတ်ပေးခြင်း 
var x = 50;
var expression1 = x > 25;
var expression2 = x < 60;

//1 and 2 နှစ်လုံးမှန်ရင် ဒါလုပ်
if (expression1 && expression2) {
  console.log('True ✅ True ✅');

  // 1 ဘဲ မှန်ပီး 2 ကမှားနေတယ်ဆိုရင် ဒါလုပ်
} else if (expression1) {
  console.log('True ✅ False ❌');

  // 1က မှားပီး 2က မှန်ရင် ဒါလုပ်
} else if (expression2) {
  console.log('False ❌ True ✅');

  // တစ်ခုမှ မမှန်ရင် ဒါလုပ်
} else {
  console.log('False ❌ False ❌');
}