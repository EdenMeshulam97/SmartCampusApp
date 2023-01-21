
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home/Home';
import Iot from './Iot/Iot';
const Drawer = createDrawerNavigator();

const NavDrawer = ()=>{
return (
<Drawer.Navigator>
<Drawer.Screen name="Home" component={Home} />
<Drawer.Screen name="Iot" component={Iot} />
</Drawer.Navigator>
)
}


export default NavDrawer