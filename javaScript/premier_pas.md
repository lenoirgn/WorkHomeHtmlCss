- Exercice2:

 4.3. le promble est `def`, les parantheses sur `if` .
 4.4 
 ```
  var calcul = function(x, y) {
    var pi = 3.14;
    if (x > 0){
      return (x + y) * pi;
       }    
    else
        {return y *pi;}
}
```
calcul(3,5)   
<- `25.12 `

4.5 
```
/** Calcule la moyenne de deux nombres
* @param {number} x - un nombre
* @param {number} y - un autre nombre
* @return {number} la moyenne de x et y
*/
var moyenne = function(x,y){
  return (x+y)/2
}
moyenne(4,6) 
```
moyenne(4,6)\
<- `5`

- Exercice3:\
1. 
```
/** Renvoie le max de deux nombres
* @param {number} a - un nombre
* @param {number} b - un autre nombre
* @return {number} le max de a et b
*/
var max=function(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

```
max(3,-3)\
<- `-3`

2. 
```
/** Renvoie le max de deux nombres
* @param {number} a - un nombre
* @param {number} b - un autre nombre
* @param {number} c - un autre nombre
* @return {number} le max de a,b et c
*/
var max3=function(a,b,c){
   
    if (a>b && a>c){ 
        return a;
    }
    else  if (c>b && c>a) {
        return c;
    }
  else {
    return b
  }
}
```

max3(3,13,20)\
<- `13`

```
var max3bis=function(a,b,c){
  return max(max(a,b),c)
}
```

max3bis(2,3,4)\
<- `4`

3.
max('a','b')\
`"b"`\
max('j','b')\
`'j'`\
max('aj','bk')\
`"bk" `\
4. 1- 
```
function estEntier(x) {
    return Number.isInteger(x);
}
```
```
estEntier(2);    // true
estEntier(2.3);  // false
estEntier(-10);  // true
```

```
estEntier("2");   // true  
estEntier("2.3"); // false
estEntier("deux"); // false
```

6.

```
function alea(n) {
    return Math.floor(Math.random() * n);
} 
```

``` 
alea(2) // 1
alea(22) // 15
alea(22) // 10
```
- Exercice5:

2.
```
foisCent(5) → 500
foisCent(123) → 12300
plusCent(5) → 105
plusCent(123) → 223
```









