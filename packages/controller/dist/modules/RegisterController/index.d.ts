import * as React from "react";
import PureComponent = React.PureComponent;
interface Props {
    children: (data: {
        submit: (values: any) => Promise<null>;
    }) => JSX.Element | null;
}
export declare class RegisterController extends PureComponent<Props> {
    submit: (values: any) => Promise<null>;
    render(): JSX.Element | null;
}
export {};
