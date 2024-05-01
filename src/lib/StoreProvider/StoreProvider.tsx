/* eslint-disable react/react-in-jsx-scope */

import { Provider } from "react-redux";
import { store } from "../../lib/store";

export default function StoreProvider({ children }) {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
