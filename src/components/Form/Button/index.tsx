import React, { useState } from "react";
import { TouchableHighlight, TouchableHighlightProps } from "react-native";

interface Props extends TouchableHighlightProps {}

export function Button({ children, ...rest }: Props) {
  return <TouchableHighlight {...rest}>{children}</TouchableHighlight>;
}
