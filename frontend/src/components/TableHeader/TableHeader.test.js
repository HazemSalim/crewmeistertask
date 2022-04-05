import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import TableHeader from "../TableHeader";

const mockStore = configureStore([]);

describe("TableHeader component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      absences: [],
    });
  });

  it("should display data", () => {
    const tableHeaders = [
      "Serial",
      "Member Name",
      "Absence Type",
      "Period",
      "Member Note",
      "Status",
      "Admitter Note",
      "Actions",
    ];

    const { getByText } = render(
      <Provider store={store}>
        <table>
          <thead>
            <TableHeader data={tableHeaders} />
          </thead>
        </table>
      </Provider>
    );

    expect(getByText(/Serial/i)).toBeInTheDocument();
    expect(getByText(/Member Name/i)).toBeInTheDocument();
    expect(getByText(/Absence Type/i)).toBeInTheDocument();
    expect(getByText(/Period/i)).toBeInTheDocument();
    expect(getByText(/Member Note/i)).toBeInTheDocument();
    expect(getByText(/Status/i)).toBeInTheDocument();
    expect(getByText(/Admitter Note/i)).toBeInTheDocument();
    expect(getByText(/Actions/i)).toBeInTheDocument();
  });
});
