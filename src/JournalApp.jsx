import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const JournalApp = () => {
  return (
    <>
      {/* Sistema principal de rutas */}
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};
