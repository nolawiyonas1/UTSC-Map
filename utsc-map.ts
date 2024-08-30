function initMap() {
    const markers = [
        {
            locationName: 'AA112',
            lat: 43.78460771951796, 
            lng: -79.187147393432,
            description: '<img src="images/rooms/AA112.jpg" alt="AA112 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/aa112">More info/Room Schedule</a>'
        },
        {
            locationName: 'AA152',
            lat: 43.784386067312894, 
            lng: -79.18732847062265,
            description: '<img src="images/rooms/AA152.jpg" alt="AA152 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },
        {
            locationName: 'AA160',
            lat: 43.78413767030322, 
            lng: -79.18755201885769,
            description: '<img src="images/rooms/AA160.jpg" alt="AA160 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/aa160">More info/Room Schedule</a>'
        },
        {
            locationName: 'AA204',
            lat: 43.784247250604786, 
            lng: -79.18742361172906,
            description: '<img src="images/rooms/AA204.jpg" alt="AA204 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/aa204">More info/Room Schedule</a>'
        },
        {
            locationName: 'AA205',
            lat: 43.78430807327236,  
            lng: -79.18736313768969,
            description: '<img src="images/rooms/AA205.jpg" alt="AA205 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/aa205">More info/Room Schedule</a>'
        },
        {
            locationName: 'AA206',
            lat: 43.78434171375903,   
            lng: -79.18731773575006,
            description: '<img src="images/rooms/AA206.jpg" alt="AA206 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/aa206">More info/Room Schedule</a>'
        },
        {
            locationName: 'AA207',
            lat: 43.7844176204286,    
            lng: -79.18727950253772,
            description: '<img src="images/rooms/AA207.jpg" alt="AA207 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/aa207">More info/Room Schedule</a>'
        },
        {
            locationName: 'AA208',
            lat: 43.78448835155667,     
            lng: -79.18722932144652,
            description: '<img src="images/rooms/AA208.jpg" alt="AA208 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/aa208">More info/Room Schedule</a>'
        },
        {
            locationName: 'AA209',
            lat: 43.78458150950007,      
            lng: -79.18717794556747,
            description: '<img src="images/rooms/AA209.jpg" alt="AA209 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/aa209">More info/Room Schedule</a>'
        },
        {
            locationName: 'AA303',
            lat: 43.784484038685385,       
            lng: -79.1872317110223,
            description: '<img src="images/rooms/AA303.jpg" alt="AA303 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/aa303">More info/Room Schedule</a>'
        },
        {
            locationName: 'AC213',
            lat: 43.78397923208666,        
            lng: -79.18660155170217,
            description: '<img src="images/rooms/AC213.jpg" alt="AC213 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },
        {
            locationName: 'AC223',
            lat: 43.783836713350915,         
            lng: -79.18622100849171,
            description: '<img src="images/rooms/AC223.jpg" alt="AC223 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ac223">More info/Room Schedule</a>'
        },    
        {
            locationName: 'AC227',
            lat: 43.78393348111806,          
            lng: -79.186337932782,
            description: '<img src="images/rooms/AC227.jpg" alt="AC227 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ac227">More info/Room Schedule</a>'
        },    
        {
            locationName: 'AC332',
            lat: 43.78392379895599,           
            lng: -79.1862306444227,
            description: '<img src="images/rooms/AC332.jpg" alt="AC332 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ac332">More info/Room Schedule</a>'
        }, 
        {
            locationName: 'AC Library',
            lat: 43.784091090321056,           
            lng: -79.18634459222228,
            description: '<img src="images/rooms/Library.jpg" alt="Library image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },
        {
            locationName: 'Toronto Pan Am',
            lat: 43.79058592309381,            
            lng: -79.19408978662254,
            description: '<img src="images/rooms/pan am.jpg" alt="Toronto Pan Am image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://tpasc.ca/">More info/Schedule</a>'
        },
        {
            locationName: 'BV260',
            lat: 43.78453077334754,            
            lng: -79.18609544048476,
            description: '<img src="images/rooms/BV260.jpg" alt="BV260 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/bv260">More info/Room Schedule</a>'
        },    
        {
            locationName: 'BV264',
            lat: 43.78448518029625,            
            lng: -79.18598266749119,
            description: '<img src="images/rooms/BV264.jpg" alt="BV264 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/bv264">More info/Room Schedule</a>'
        },   
        {
            locationName: 'BV340',
            lat: 43.784434730299246,           
            lng: -79.18656376187175,
            description: '<img src="images/rooms/BV340.jpg" alt="BV340 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/bv340">More info/Room Schedule</a>'
        },      
        {
            locationName: 'BV359',
            lat: 43.78438292165816,            
            lng: -79.18668913715406,
            description: '<img src="images/rooms/BV359.jpg" alt="BV359 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/bv359">More info/Room Schedule</a>'
        },    
        {
            locationName: 'BV361',
            lat: 43.78436865688046,           
            lng: -79.18679553019284,
            description: '<img src="images/rooms/BV361.jpg" alt="BV361 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/bv361">More info/Room Schedule</a>'
        },   
        {
            locationName: 'BV363',
            lat: 43.78425014936486,            
            lng: -79.18687000531997,
            description: '<img src="images/rooms/BV363.jpg" alt="BV363 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/bv363">More info/Room Schedule</a>'
        }, 
        {
            locationName: 'BV469',
            lat: 43.7842330350755,        
            lng: -79.1869388514482,
            description: '<img src="images/rooms/BV469.jpg" alt="BV469 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        }, 
        {
            locationName: 'BV471',
            lat: 43.78419113627161,         
            lng: -79.18696464501699,
            description: '<img src="images/rooms/BV471.jpg" alt="BV471 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },            
        {
            locationName: 'BV473',
            lat: 43.784172514571566,          
            lng: -79.18706566982807,
            description: '<img src="images/rooms/BV473.jpg" alt="BV473 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },
        {
            locationName: 'BV490',
            lat: 43.78402974801184,          
            lng: -79.18702268054676,
            description: '<img src="images/rooms/BV490.jpg" alt="BV490 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },
        {
            locationName: 'BV498',
            lat: 43.78406233606092,          
            lng: -79.18710650964532,
            description: '<img src="images/rooms/BV498.jpg" alt="BV498 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },
        {
            locationName: 'BV Bookstore',
            lat: 43.78414449028825,           
            lng: -79.18654254746575,
            description: '<img src="images/rooms/Bookstore.JPG" alt="Bookstore image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        }, 
        {
            locationName: 'SW Campus Police',
            lat: 43.783505811322414,            
            lng: -79.18779981544303,
            description: '<img src="images/rooms/Campus Police.jpg" alt="Campus Police image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },  
        {
            locationName: 'EV114',
            lat: 43.78722856936807,             
            lng: -79.1904975924787,
            description: '<img src="images/rooms/EV114.jpg" alt="EV114 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },  
        {
            locationName: 'EV152',
            lat: 43.78732756244353,              
            lng: -79.19038676471465,
            description: '<img src="images/rooms/EV152.jpg" alt="EV152 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },  
        {
            locationName: 'EV262',
            lat: 43.7873316306486,               
            lng: -79.19024400352704,
            description: '<img src="images/rooms/EV262.jpg" alt="EV262 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        }, 
        {
            locationName: 'SL Food Court',
            lat: 43.78499845819505,                
            lng: -79.18693166244884,
            description: '<img src="images/rooms/Foodcourt.jpg" alt="Food Court image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },
        {
            locationName: 'HL Krembil',
            lat: 43.78480943492786,                 
            lng: -79.18642729456445,
            description: '<img src="images/rooms/HL Krembil student commons.jpg" alt="Krembil Student Commons image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },  
        {
            locationName: 'HL170',
            lat: 43.784655724469836,                  
            lng: -79.1859970180129,
            description: '<img src="images/rooms/HL170.jpg" alt="HL170 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },        
        {
            locationName: 'HLB101',
            lat: 43.78463490699491,             
            lng: -79.18572997863166,
            description: '<img src="images/rooms/HLB101.jpg" alt="HLB101 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hlb101">More info/Room Schedule</a>'
        }, 
        {
            locationName: 'HLB106',
            lat: 43.784635812102714,              
            lng: -79.18571368045352,
            description: '<img src="images/rooms/HLB106.jpg" alt="HLB106 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hlb106">More info/Room Schedule</a>'
        }, 
        {
            locationName: 'HLB108',
            lat: 43.78466025000798,               
            lng: -79.18575630645789,
            description: '<img src="images/rooms/HLB108.jpg" alt="HLB108 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hlb108">More info/Room Schedule</a>'
        }, 
        {
            locationName: 'HLB108',
            lat: 43.78466025000798,               
            lng: -79.18575630645789,
            description: '<img src="images/rooms/HLB108.jpg" alt="HLB108 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hlb108">More info/Room Schedule</a>'
        }, 
        {
            locationName: 'HLB110',
            lat: 43.7847018849347,                
            lng: -79.18583654364258,
            description: '<img src="images/rooms/HLB110.jpg" alt="HLB110 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hlb110">More info/Room Schedule</a>'
        }, 
        {
            locationName: 'HLB120',
            lat: 43.78476795769366,                   
            lng: -79.18600328654203,
            description: '<img src="images/rooms/HLB120.jpg" alt="HLB120 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        }, 
        {
            locationName: 'HW214',
            lat: 43.78322841127629,                 
            lng: -79.18697894420674,
            description: '<img src="images/rooms/HW214.jpg" alt="HW214 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hw214">More info/Room Schedule</a>'
        }, 
        {
            locationName: 'HW215',
            lat: 43.783176370591,                  
            lng: -79.18695920889468,
            description: '<img src="images/rooms/HW215.jpg" alt="HW215 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hw215">More info/Room Schedule</a>'
        }, 
        {
            locationName: 'HW216',
            lat: 43.78308821996398,                   
            lng: -79.18698738544312,
            description: '<img src="images/rooms/HW216.jpg" alt="HW216 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hw216">More info/Room Schedule</a>'
        }, 
        {
            locationName: 'HW308',
            lat: 43.783414135691686,                   
            lng: -79.18686617573356,
            description: '<img src="images/rooms/HW308.jpg" alt="HW308 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hw308">More info/Room Schedule</a>'
        },
        {
            locationName: 'HW402',
            lat: 43.78363085751103,                   
            lng: -79.18718495697594, 
            description: '<img src="images/rooms/HW402.jpg" alt="HW402 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hw402">More info/Room Schedule</a>'
        },
        {
            locationName: 'HW408',
            lat: 43.78357427976671,                   
            lng: -79.18717565918969,  
            description: '<img src="images/rooms/HW408.jpg" alt="HW408 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/hw408">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC Cafe',
            lat: 43.78692261166962,                    
            lng: -79.18940530018908,  
            description: '<img src="images/rooms/IC Cafe.jpg" alt="IC Cafe image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.google.com/maps/place/La+Prep/@43.7868123,-79.1893745,59m/data=!3m2!1e3!5s0x89d4da71edafc075:0xd8c2ab42332259f5!4m6!3m5!1s0x89d4da683cfff253:0xb3dfc1c97f41a369!8m2!3d43.786917!4d-79.1894046!16s%2Fg%2F11g_kxntv?entry=ttu">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC120',
            lat: 43.786912831434805,                    
            lng: -79.18999759009978,  
            description: '<img src="images/rooms/IC120.jpg" alt="IC120 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic120">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC130',
            lat: 43.786823816258476,                     
            lng: -79.1897688006491,  
            description: '<img src="images/rooms/IC130.jpg" alt="IC130 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic130">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC200',
            lat: 43.786939997778454,                       
            lng: -79.1895463325666,  
            description: '<img src="images/rooms/IC200.jpg" alt="IC200 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic200">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC204',
            lat: 43.78694768625331,                       
            lng: -79.18953923252138,  
            description: '<img src="images/rooms/IC204.jpg" alt="IC204 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic204">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC208',
            lat: 43.786991254258744,                        
            lng: -79.18958183279258,  
            description: '<img src="images/rooms/IC208.jpg" alt="IC208 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic208">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC212',
            lat: 43.78704507351577,                         
            lng: -79.18968715012973,
            description: '<img src="images/rooms/IC212.jpg" alt="IC212 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic212">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC220',
            lat: 43.787022862399695,                          
            lng: -79.18984926782848,
            description: '<img src="images/rooms/IC220.jpg" alt="IC220 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic220">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC230',
            lat: 43.78694170632852,                           
            lng: -79.18992618498483,
            description: '<img src="images/rooms/IC230.jpg" alt="IC230 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic230">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC300',
            lat: 43.78688532415104,                           
            lng: -79.18950846565885, 
            description: '<img src="images/rooms/IC300.jpg" alt="IC300 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic300">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC320',
            lat: 43.78693828922835,                           
            lng: -79.18988950141795, 
            description: '<img src="images/rooms/IC320.jpg" alt="IC320 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic320">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC326',
            lat: 43.786886178426855,                            
            lng: -79.18975696724088,
            description: '<img src="images/rooms/IC326.jpg" alt="IC326 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic326">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC328',
            lat: 43.7868631129756,                             
            lng: -79.18972620037835,
            description: '<img src="images/rooms/IC328.jpg" alt="IC328 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/ic328">More info/Room Schedule</a>'
        },
        {
            locationName: 'IC402',
            lat: 43.786950249078046,                    
            lng: -79.18956526602045,
            description: '<img src="images/rooms/IC402.jpg" alt="IC402 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },
        {
            locationName: 'IC404',
            lat: 43.78698612861269,                     
            lng: -79.18960904963252,
            description: '<img src="images/rooms/IC404.jpg" alt="IC404 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },
        {
            locationName: 'IC406',
            lat: 43.78702200812584,                     
            lng: -79.18967413338021, 
            description: '<img src="images/rooms/IC406.jpg" alt="IC406 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen'
        },
        {
            locationName: "Registrar's Office",
            lat: 43.78480322214975,                              
            lng: -79.18568211967565,
            description: '<img src="images/rooms/Registrars.jpg" alt="Registrars Office image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/">More info/Schedule</a>'
        },
        {
            locationName: "KW110",
            lat: 43.78296444379194,                               
            lng: -79.18584930758858,
            description: '<img src="images/rooms/KW110.jpg" alt="KW110 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/mw110">More info/Schedule</a>'
        },
        {
            locationName: "KW120",
            lat: 43.7828892614047,                                
            lng: -79.1858971536602,
            description: '<img src="images/rooms/KW120.jpg" alt="KW120 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/mw120">More info/Schedule</a>'
        },
        {
            locationName: "KW130",
            lat: 43.782843542340466,                               
            lng: -79.18592952012058,
            description: '<img src="images/rooms/KW130.jpg" alt="KW130 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/mw130">More info/Schedule</a>'
        },
        {
            locationName: "KW140",
            lat: 43.78279477530011,                                
            lng: -79.18600269646576,
            description: '<img src="images/rooms/KW140.jpg" alt="KW140 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/mw140">More info/Schedule</a>'
        },
        {
            locationName: "KW160",
            lat: 43.78283439852344,                                 
            lng: -79.18608431623538,
            description: '<img src="images/rooms/KW160.jpg" alt="KW160 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/mw160">More info/Schedule</a>'
        },
        {
            locationName: "KW170",
            lat: 43.78284862223824,                                  
            lng: -79.1860491353002,
            description: '<img src="images/rooms/KW170.jpg" alt="KW170 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/mw170">More info/Schedule</a>'
        },
        {
            locationName: "KW223",
            lat: 43.7828526861561,                                   
            lng: -79.18586619443724,
            description: '<img src="images/rooms/KW223.jpg" alt="KW223 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/mw223">More info/Schedule</a>'
        },
        {
            locationName: "KW262",
            lat: 43.78280493510344,                                    
            lng: -79.18614482744388,
            description: '<img src="images/rooms/KW262.jpg" alt="KW262 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/mw262">More info/Schedule</a>'
        },
        {
            locationName: "KW264",
            lat: 43.782816110885136,                                     
            lng: -79.18610261032167,
            description: '<img src="images/rooms/KW264.jpg" alt="KW264 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/mw264">More info/Schedule</a>'
        },
        {
            locationName: "SW128",
            lat: 43.783415764952906,                                      
            lng: -79.18801159407498,
            description: '<img src="images/rooms/SW128.jpg" alt="SW128 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/sw128">More info/Schedule</a>'
        },
        {
            locationName: "SW143",
            lat: 43.78330184111893,                                      
            lng: -79.18833428154564,
            description: '<img src="images/rooms/SW143.jpg" alt="SW143 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/sw143">More info/Schedule</a>'
        },
        {
            locationName: "SW309",
            lat: 43.783385043940406,                                       
            lng: -79.18806833033355,
            description: '<img src="images/rooms/SW309.jpg" alt="SW309 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/sw309">More info/Schedule</a>'
        },
        {
            locationName: "SW311",
            lat: 43.78333512226139,                                       
            lng: -79.18820130593959,
            description: '<img src="images/rooms/SW311.jpg" alt="SW311 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/sw311">More info/Schedule</a>'
        },
        {
            locationName: "SW319",
            lat: 43.7832800803619,                                       
            lng: -79.18863391991123,
            description: '<img src="images/rooms/SW319.jpg" alt="SW319 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/sw319">More info/Schedule</a>'
        },
        {
            locationName: "SY110",
            lat: 43.784336898149604,                                        
            lng: -79.1894431443408,
            description: '<img src="images/rooms/SY110.jpg" alt="SY110 image" style="width: 100%; height: auto;" onclick="openFullScreen(this)"> Click picture for fullscreen <br><a href="https://www.utsc.utoronto.ca/registrar/sy110">More info/Schedule</a>'
        },
    ];

    // Sort markers alphabetically by locationName
    markers.sort((a, b) => a.locationName.localeCompare(b.locationName));

    const centerMap = { lat: 43.7854555, lng: -79.1888985 };

    const mapOptions = {
        center: centerMap,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    const infoWindow = new google.maps.InfoWindow({
        minWidth: 200,
        maxWidth: 300
    });

    const markerObjects = [];

    for (let i = 0; i < markers.length; i++) {
        const marker = new google.maps.Marker({
            position: { lat: markers[i]['lat'], lng: markers[i]['lng'] },
            map: null // Do not display the marker initially
        });

        const infoWindowContent = `
            <div class="feh-content">
                <h3>${markers[i]['locationName']}</h3>
                <address>
                    <p>${markers[i]['description']}</p>
                </address>
            </div>
        `;

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map, marker);
        });

        markerObjects.push({
            marker: marker,
            locationName: markers[i]['locationName'],
            infoWindowContent: infoWindowContent
        });

        // Populate dropdown
        const dropdown = document.getElementById('location-dropdown');
        const option = document.createElement('option');
        option.value = markers[i]['locationName'];
        option.text = markers[i]['locationName'];
        dropdown.appendChild(option);
    }

    document.getElementById('search-button').addEventListener('click', function() {
        const searchValue = document.getElementById('search-input').value.toLowerCase();

        let found = false;
        for (let i = 0; i < markerObjects.length; i++) {
            if (markerObjects[i].locationName.toLowerCase() === searchValue) {
                markerObjects[i].marker.setMap(map);
                map.setCenter(markerObjects[i].marker.getPosition());
                map.setZoom(18);
                infoWindow.setContent(markerObjects[i].infoWindowContent);
                infoWindow.open(map, markerObjects[i].marker);
                found = true;
                break;
            }
        }
        if (!found) {
            alert('Location not found');
        }
    });

    document.getElementById('location-dropdown').addEventListener('change', function() {
        const selectedValue = this.value.toLowerCase();

        let found = false;
        for (let i = 0; i < markerObjects.length; i++) {
            if (markerObjects[i].locationName.toLowerCase() === selectedValue) {
                markerObjects[i].marker.setMap(map);
                map.setCenter(markerObjects[i].marker.getPosition());
                map.setZoom(18);
                infoWindow.setContent(markerObjects[i].infoWindowContent);
                infoWindow.open(map, markerObjects[i].marker);
                found = true;
                break;
            }
        }
        if (!found) {
            alert('Location not found');
        }
    });
}

function openFullScreen(image) {
    const imgWindow = window.open("", "_blank");
    imgWindow.document.write('<html><head><title>Full Screen Image</title></head><body style="margin:0"><img src="' + image.src + '" style="width:100%;height:100%;object-fit:contain"></body></html>');
    imgWindow.document.close();
}
