var strStr = function(haystack, needle) {

    function BuilsLps(needle){
        let lps = [0]; 
        let prevlps = 0 ;
        let i = 1;
    
        while(i<needle.length){
            if(needle[prevlps]=== needle[i]){
                
                lps[i] = prevlps+1;
                i+=1;
                prevlps+=1;
            }
            else{
                
                if(prevlps === 0){
                    lps[i] = 0;
                    i+=1;
                }
                else{
                    prevlps = lps[prevlps -1];
                }
            }
            
             
        }
        return lps;
    }

    let lps = BuilsLps(needle);
    console.log(lps)
    let i = 0;
    let j = 0;
    let flag = false;

    while((haystack.length - i)>= (needle.length -j) ){
        if(haystack[i]===needle[j]){
            i+=1;
            j+=1;
        }
        else{
            if(j===0){
                i+=1;
            }
            else{
                j = lps[j-1]
            }
        }

        if(j===needle.length){
           console.log("Found pattern " + "at index " + (i - j));
           
            flag = true;
            break;
        }

    }
    return flag?i-j:-1
   
};



strStr("ABABDABACDABABCABAB","ABABCABAB")