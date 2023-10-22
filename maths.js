function redirect(e)
{
    document.getElementById('main').hidden=true;
    document.getElementById('main-page').hidden=false;
    document.getElementById('div').hidden=true;
    document.getElementById('multi').hidden=true;
    document.getElementById('sub').hidden=true;
    document.getElementById('add').hidden=true;
    document.getElementById(e).hidden=false;
    document.getElementById('Result').hidden=true;
}

function func(e)
{
    let a=Number.parseInt(document.getElementById('number1').value);
    let b=Number.parseInt(document.getElementById('number2').value);
    if (a.length==0 || b.length==0) alert("Please Enter both the numbers");
    else
    {
        let c=document.getElementById('Result');
        if (e=='div') c.innerHTML=Math.floor(a/b);
        else if (e=='multi')  c.innerHTML=a*b;
        else if (e=='sub')  c.innerHTML=a-b;
        else if (e=='add')  c.innerHTML=a+b;
        c.hidden=false;
    }
    document.getElementById('number1').value=' ';
    document.getElementById('number2').value=' ';
    return false
}


function call_prev(b)
{
    document.getElementById('main').hidden=false;
    document.getElementById(b).hidden=true;
}













/*function isSmaller(str1, str2)
{
    let n1 = str1.length, n2 = str2.length;
    if (n1 < n2) return true;
    if (n2 < n1) return false;

    for (let i = 0; i < n1; i++)    
    {
        if (str1[i] < str2[i]) return true;
        else if (str1[i] > str2[i]) return false;
    }
    return false;
}

function equal(a,b)
{
    let l1=a.length,l2=b.length;
    if (l1!=l2)
    {
        if (l1>l2) for (let i=0;i<l1-l2;i++) b='0'+b;
        else for (let i=0;i<l2-l1;i++) a='0'+a;
    }
    return {a,b}
}

function subtract(a,b)
{
    equal(a,b);
    let borrow=0,n=a.length,t,res="";
    for (let i=n-1;i>=0;i--)
    {
        if ((a[i]-'0')-borrow>=(b[i]-'0')) 
        {
            t = (((a[i]-'0')-borrow)-(b[i]-'0'))+'0';
            res = t + res;
            console.log(res+" "+t)
            borrow=0;
        }   
        else 
        {
            t = (((a[i]-'0')-borrow)-(b[i]-'0')+10)+'0';
            res = t + res;
            borrow=1;
        }
    }
    return res;
}

function add(a,b)
{
    let c=0;
    let res="";
    let temp;
    equal(a,b);
    let l1=a.length;
    for (let i=l1-1;i>=0;i--)
    {
        let ct=((a[i]-'0')+(b[i]-'0'));
        let t = (ct+c)%10 +'0';
        res = t + res;
        c=Math.floor((ct+c)/10);
    }
    temp = c+'0';
    if (c)
        res = temp + res;
    return res;
}

function power(n)
{
    let s="";
    for (let i=0;i<n;i++) s+='0';
    return s;
}

function multiply1(a,b)
{
    if (a.length==b.length & a.length==1)
    {
        return toString((a[0]-'0')*(b[0]-'0'));
    }
    [a,b]=equal(a,b);
    console.log(a+" "+b);

    if (a.length%2!=0) a = '0'+ a;
    if (b.length%2!=0) b = '0'+ b;
    let n=a.length;
    let ah="",al="",bh="",bl="";
    for (let i=0;i<Math.floor(n/2);i++)
    {
        ah+=a[i];
        al+=a[Math.floor(n/2)+i];
        bh+=b[i];
        bl+=b[Math.floor(n/2)+i];
    }
    let c0=multiply1(al,bl);
    let c1=multiply1(ah,bh);
    let c2=subtract(multiply1(add(al,ah),add(bl,bh)),add(c1,c0));
    return add(add(c1+power(n),c2+power(Math.floor(n/2))),c0);
}
*/
