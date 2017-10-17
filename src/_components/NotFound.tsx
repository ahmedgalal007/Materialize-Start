import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export class NotFound extends React.Component<HelloProps, {}> {
    render() {
        return (
            <h1>Something wrong the page does n't exist! </h1>
        )
    }
}