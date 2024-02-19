import { NavigationContainer } from "@react-navigation/native";

import DraweRoutes from './Drawer.routes';

export default function Routes() {
  return (
    <NavigationContainer>
      <DraweRoutes />
    </NavigationContainer>
  )
}