import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import selectionScreen from '../screens/SelectionScreen'
import {PromptScreen} from '../screens/PromptScreen';

const screens= {
    Home:{
        screen:selectionScreen
    },
    PromptScreen:{
        screen: PromptScreen
    },
}

const ScreenStack = createStackNavigator(screens)

export default createAppContainer(ScreenStack)