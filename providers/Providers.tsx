import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider as StoreProvider } from "react-redux";
import { store } from "../stores/moviesStore";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";

type ProvidersProps = {
    children: React.ReactNode
}

const theme = {
  ...MD3DarkTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#3498db',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};

const Providers: React.FC<ProvidersProps> = ({children}) => {
    const queryClient = new QueryClient();

    return (
        <StoreProvider store={store}>
            <PaperProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </PaperProvider>
        </StoreProvider>
    );
}

export default Providers;