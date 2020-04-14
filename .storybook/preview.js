
import { addParameters } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import React from "react";
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs} from "@storybook/addon-knobs";

// addDecorator(storyFn => <div style={{padding: "20px", background: "#3b5998"}}>{storyFn()}</div>);
addDecorator(withA11y);
addDecorator(withKnobs);
