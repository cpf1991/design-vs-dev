import { extendTheme} from '@chakra-ui/react';
import { buttonStyles } from './components/button';
import { globalStyles } from './styles';

export default extendTheme(
	globalStyles,
	buttonStyles, // button styles
);

