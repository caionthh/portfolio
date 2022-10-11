import { ScrollView } from "react-native";
import { HorizontalScroll } from "./style"

interface ViewProps {
  children: React.ReactNode;
  offsets: number[];
  style?: {};
}

export const PaginatedScrollView = ({ children, offsets, style }: ViewProps) => {

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment={"start"}
      scrollEventThrottle={16}
      decelerationRate="fast"
      snapToOffsets={offsets}
      style={[style]}
    >
      {children}
    </ScrollView>
  )
}
