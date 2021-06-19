判断语句
if (表达式) {
    console.log('打印这行') //表达式为true   则执行这段语句
} else {
    console.log('输出这行') //表达式为false  则执行这段语句
}

if (表达式) {
    语句
} else if (表达式) {
    语句
} else {
    语句
}


switch (fruit) {
    case 'banana':
        //语句
        break;
    case 'apple':
        //语句
        break;
    default:
    //语句
}


//循环

for (语句1; 表达式2; 语句4) {
    循环体3
}

// 先执行语句1
// 然后判断表达式2
// 如果为真，执行循环体，然后执行语句3
//如果为假，直接退出循环
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break
    }
}

