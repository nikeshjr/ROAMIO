import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from "lucide-react";
import { Link } from 'react-router-dom';
function Getd() {
    // const [count, setCount] = useState(0)
  const navigate=useNavigate();
    return (
      <>
         <Link to="/getstate" className="custom-button back-button" aria-label="Go back" type="button"><ArrowLeftIcon className="back-button-icon" /></Link>
        <h1>Select the district</h1>
        <img src="\TamilNadu.png" usemap="#roamMap" alt="Roamio Map" />
        <map name="roamMap">
 
           <area shape="circle" coords="203,933,34" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getkk'); // Navigate to another route
          }}  alt="Region1" />
          <area shape="rect" coords="250,689,351,633" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getm'); // Navigate to another route
          }}  alt="Region2" />
          <area shape="circle" coords="421,659,46" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getds'); // Navigate to another route
          }}  alt="Region3" />
          <area shape="poly" coords="180,860,180,846,188,833,200,828,213,828,221,837,229,845,231,836,247,836,258,833,267,829,281,829,284,838,290,844,287,856,284,864,284,875,288,880,288,887,290,899,292,909,299,917,305,920,305,928,289,930,281,937,275,945,190,878,268,945" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/gettiru'); // Navigate to another route
          }}  alt="Region4" />
          <area shape="poly" coords="335,746,347,746,354,754,360,760,365,764,368,772,368,779,372,785,376,797,368,801,364,806,355,815,349,828,346,841,349,846,348,853,341,863,341,878,339,897,331,907,327,916,319,920,310,923,295,921,295,912,292,905,291,894,286,887,283,881,290,860,290,848,288,835,279,826,270,820,269,812,268,799,273,791,264,788,272,776,302,774" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/gettoothu'); // Navigate to another route
          }}  alt="Region5" />
          <area shape="poly" coords="204,737,213,738,221,739,224,745,234,747,246,751,256,754,268,758,279,763,292,764,289,773,274,775,262,781,265,789,265,796,266,804,264,816,255,816,245,816,248,823,249,830,246,834,233,834,226,839,216,831,205,826,189,827,181,815,173,805" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getten'); // Navigate to another route
          }}  alt="Region6" />
          <area shape="rect" coords="216,740,366,706" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getvirudu'); // Navigate to another route
          }}  alt="Region7" />
          <area shape="rect" coords="380,755,544,718" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getram'); // Navigate to another route
          }}  alt="Region8" />
          <area shape="poly" coords="186,611,194,612,204,611,219,611,231,610,244,608,252,607,265,607,265,614,267,620,270,629,267,635,266,648,256,660,249,682,238,692,233,706,225,712,217,714,206,702,189,647,182,701,202,704,206,702" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/gettheni'); // Navigate to another route
          }}  alt="Region9" />
          <area shape="poly" coords="215,530,225,524,239,523,250,515,262,519,270,522,285,522,299,523,315,525,328,526,338,528,344,534,351,535,351,544,360,550,367,553,369,560,361,567,369,571,373,577,370,590,369,598,364,606,343,602,326,600,318,604,313,609,303,615,291,619,278,621,265,602,253,597,234,601,215,605,209,604,206,587,204,570,202,559" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getdin'); // Navigate to another route
          }}  alt="Region10" />
          <area shape="poly" coords="413,541,404,543,399,535,401,519,414,512,425,513,438,512,455,516,487,508,499,515,510,526,516,529,515,537,509,547,512,551,512,561,511,570,510,576,507,585,507,591,517,594,511,599,516,604,521,606,527,613,529,620,531,625,525,630,515,639,509,650,482,618,484,612,477,610,470,606,461,604,455,597,449,597,444,601,437,598,430,588,420,582,411,583,417,549,416,554,411,557" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getpudu'); // Navigate to another route
          }}  alt="Region11" />
          <area shape="poly" coords="156,392,165,388,172,394,165,402,149,408,154,416,148,422,145,430,154,431,150,437,147,444,153,450,146,454,150,468,151,477,153,490,154,511,150,528,156,544,156,553,157,566,153,576,147,585,140,587,133,582,124,576,117,571,116,551,124,512,130,498,123,483,108,474,93,472,96,456,110,450,103,443,100,432,95,424,107,410,121,405,131,393" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getcoim'); // Navigate to another route
          }}  alt="Region12"/>
           <area shape="poly" coords="214,438,214,430,213,420,210,412,207,405,204,411,200,414,194,403,180,400,165,402,156,406,148,417,153,426,158,436,159,442,155,450,158,456,188,454,207,457,203,466,200,472,183,479,173,482,228,442,256,441,277,447,277,454,277,462,275,475,275,480,227,477,290,489,284,497,286,512,277,516,269,519,256,513,244,514,233,519,222,522,210,532,206,548,203,571,198,586,189,579,184,568,167,565,159,542,183,527,173,505" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/gettir'); // Navigate to another route
          }}  alt="Region13"/>
          <area shape="poly" coords="278,448,290,451,294,456,319,444,340,452,354,475,376,467,395,480,407,492,405,501,404,507,397,511,384,516,371,510,361,512,359,527,342,489,328,502,309,501,298,518,280,475" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getkarur'); // Navigate to another route
          }}  alt="Region14"/>
          <area shape="rect" coords="375,447,511,471" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/gettiruchy'); // Navigate to another route
          }}  alt="Region15"/>
          <area shape="poly" coords="528,465,519,469,510,471,500,472,496,477,484,478,466,490,465,503,466,514,477,514,488,508,496,513,499,517,507,522,513,531,548,578,541,475,539,471,534,463,536,461,538,464,538,465" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/gettangore'); // Navigate to another route
          }}  alt="Region16"/>
          <area shape="poly" coords="548,508,561,496,572,490,583,478,603,466,605,471,596,478,599,485,600,492,612,489,608,499,605,506,603,519,603,534,611,541,606,551,599,557,599,569,600,575,591,569,581,569,578,576,568,543" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/gettiruvarur'); // Navigate to another route
          }}  alt="Region17"/>
          <area shape="poly" coords="633,486,623,475,613,472,604,480,604,489,615,488,614,493,609,501,608,506,605,515,605,524,609,537,614,534,612,547,608,555,603,564,607,574,617,574,615,580,630,580,639,580,636,517" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getnaga'); // Navigate to another route
          }}  alt="Region18"/>
          <area shape="poly" coords="621,459,630,458,659,461,690,459,712,465,713,474,692,478,657,482,635,482,625,480,618,474,613,468" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getkar'); // Navigate to another route
          }}  alt="Region19"/>
          <area shape="poly" coords="625,396,632,396,633,402,635,420,636,432,636,445,635,452,628,453,620,455,612,457,604,454,594,460,581,462,582,447,582,433,580,426,600,413,600,403" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getmayil'); // Navigate to another route
          }}  alt="Region20"/>
          <area shape="poly" coords="509,406,515,398,521,394,534,391,544,386,554,394,559,397,563,401,574,409,571,418,566,429,556,443,547,448,531,462,508,470,495,475,483,468" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getariyal'); // Navigate to another route
          }}  alt="Region21"/>
          <area shape="poly" coords="457,381,456,368,462,369,468,374,478,382,485,389,493,390,514,393,514,399,508,408,504,419,500,424,498,436,489,444,472,440,463,441,457,442,447,440,440,444,434,435,442,405,448,388" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getperam'); // Navigate to another route
          }}  alt="Region22"/>
          <area shape="poly" coords="456,386,452,374,463,368,483,388,519,393,507,406,508,416,498,422,497,434,494,441,486,447,474,440,467,441,457,447,450,435,441,447,436,422,447,405,447,385" href="#" onClick={(e) => {
            e.preventDefault(); // Prevents default <area> behavior
            navigate('/getnamakkal'); // Navigate to another route
          }}  alt="Region23"/>
          </map>
            
      </>
    )
  }
  
  export default Getd