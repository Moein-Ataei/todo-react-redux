import React from "react";
import { connect } from "react-redux";
import { Button } from "../styledcomponents/styles";
import { setVisibilityFilter } from "../actions/todoActions";

function FilterButtons({ setVisibilityFilter }) {
  return (
    <div>
      <Button submit onClick={e => setVisibilityFilter("SHOW_ALL")}>
        All
      </Button>
      <Button submit onClick={e => setVisibilityFilter("SHOW_ACTIVE")}>
        Active
      </Button>
      <Button submit onClick={e => setVisibilityFilter("SHOW_COMPLETED")}>
        Completed
      </Button>
    </div>
  );
}

export default connect(null, { setVisibilityFilter })(FilterButtons);
