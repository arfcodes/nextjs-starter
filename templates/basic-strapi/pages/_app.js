/* eslint-disable react/prop-types */
/**
 * pages/_app.js
 */
import { QueryClient, QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';

import AxiosLib from '@lib/Api/Axios';
import { AppLoaderProvider } from '@lib/Hooks/useAppLoader';
import { AppAlertProvider } from '@lib/Hooks/useAppAlert';

import Layout from '@includes/Layout/Main';
// import '@styles/styles.scss';

AxiosLib.init();

// Create a query client
const queryOptions = {
  queries: {
    refetchOnWindowFocus: true, // Window Focus Refetching
  },
};
const queryClient = new QueryClient({
  defaultOptions: queryOptions,
});

function MyApp({ Component, pageProps }) {
  const rootStyles = Component.rootStyles || null;
  const getLayout =
    Component.getLayout ||
    ((page) => <Layout className={rootStyles}>{page}</Layout>);

  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={3}>
        <AppLoaderProvider>
          <AppAlertProvider>
            {getLayout(<Component {...pageProps} />)}
          </AppAlertProvider>
        </AppLoaderProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
