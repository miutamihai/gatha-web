// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
// apollo
import {
    ApolloProvider,
} from "@apollo/client";
import { Provider } from 'react-redux'
import { client } from './start-up/client'
import { configureStore } from './start-up/createStore'

// ----------------------------------------------------------------------

export default function App() {
    return (
        <Provider store={configureStore()}>
            <ApolloProvider client={client}>
                <ThemeConfig>
                    <ScrollToTop/>
                    <GlobalStyles/>
                    <BaseOptionChartStyle/>
                    <Router/>
                </ThemeConfig>
            </ApolloProvider>
        </Provider>
    );
}
