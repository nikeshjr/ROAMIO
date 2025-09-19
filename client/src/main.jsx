import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Add from './Add/Addplaces.jsx'
import Get from './Get/Getstate.jsx'
import Getd from './Get/Getdistrict/getd.jsx'
import Getkk from './Get/Getdistrict/Getdatakanyakumari/Getdkk.jsx'
import Getm from './Get/Getdistrict/GetDatamadurai/getdm.jsx'
import Getds from './Get/Getdistrict/GetDatasivaganga/getds.jsx'
import Gettiru from './Get/Getdistrict/Getdatatirunelveli/getdtiru.jsx'
import Gettoothu from './Get/Getdistrict/Getdatatoothu/getdtoothu.jsx'
import Getten from './Get/Getdistrict/Getdataten/getdten.jsx'
import Getvirudu from './Get/Getdistrict/GetdataVirudhu/virudu.jsx'
import Getram from './Get/Getdistrict/Getdataram/ram.jsx'
import Gettheni from './Get/Getdistrict/GetTheni/theni.jsx'
import Getdin from './Get/Getdistrict/Getdin/getdin.jsx'
import Getpudu from './Get/Getdistrict/Getdatapudu/pudu.jsx'
import Getcoim from './Get/Getdistrict/GetdataCoim/coim.jsx'
import Gettir from './Get/Getdistrict/Getdatatir/tir.jsx'
import Getk from './Get/Getdistrict/Getdatakar/karur.jsx'
import Gettrichy from './Get/Getdistrict/GetdataTiruchirappalli/tiruchy.jsx'
import Gettangore from './Get/Getdistrict/Gettanjore/tanjore.jsx'
import Gettiruvarur from './Get/Getdistrict/gettiruvarur/tiruvarur.jsx'
import Getnaga from './Get/Getdistrict/Getnaga/naga.jsx'
import Getkar from './Get/Getdistrict/Getkaraikal/karaikal.jsx'
import Getmayil from './Get/Getdistrict/Mayil/Mayil.jsx'
import Getariyal from './Get/Getdistrict/GetAriyalur/Ariyal.jsx'
import Getperam from './Get/Getdistrict/GetPeram/peram.jsx'
import Getnamakkal from './Get/Getdistrict/Getnamakkal/namakkal.jsx'

// import UpdateUser from './updateuser/Update.jsx'
const route = createBrowserRouter([
  {
  path:"/",
  element: <App />,},
  
    {
      path:"/addplaces",
      element: <Add/>,
        },
        {
          path:"/getstate",
          element:<Get />,

        },
        {
          path:"/getdistrict",
          element:<Getd />,
        },
        {
          path:"/getkk",
          element:<Getkk/>,
        },
        {
          path:"/getm",
          element:<Getm/>,
        },
        {
          path:"/getds",
          element:<Getds/>,
        },
        {
          path:"/gettiru",
          element:<Gettiru/>,
        },
        {
          path:"/gettoothu",
          element:<Gettoothu/>,
        },
        {
          path:"/getten",
          element:<Getten/>,
        },
        {
           path:"/getvirudu",
          element:<Getvirudu/>,
        },
        {
          path:"/getram",
          element:<Getram/>,
        },
        {
          path:"/gettheni",
          element:<Gettheni/>,
        },
        {
          path:"/getdin",
          element:<Getdin/>,
        },
        {
          path:"/getpudu",
          element:<Getpudu/>,
        },
        {
          path:"/getcoim",
          element:<Getcoim/>,
        },
        {
          path:"/gettir",
          element:<Gettir/>,
        },
        {
          path:"/getkarur",
          element:<Getk/>
        },
        {
          path:"/gettiruchy",
          element:<Gettrichy/>
        },
        {
          path:"/gettangore",
          element:<Gettangore/>
        },
        {
          path:"/gettiruvarur",
          element:<Gettiruvarur/>
        },
        {
          path:"/getnaga",
          element:<Getnaga/>
        },
        {
          path:"/getkar",
          element:<Getkar/>
        },
        {
          path:"/getmayil",
          element:<Getmayil/>
        },
        {
          path:"/getariyal",
          element:<Getariyal/>
        },
        {
          path:"/getperam",
          element:<Getperam/>
        },
        {
          path:"/getnamakkal",
          element:<Getnamakkal/>
        }
]);
createRoot(document.getElementById('root')).render(
   <RouterProvider router={route}></RouterProvider>
)
