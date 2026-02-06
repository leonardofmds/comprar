import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./styles";
import { FilterStatus } from "@/types/filter.status";
import { StatusIcon } from "@/components/StatusIcon";

type Props = TouchableOpacityProps & {
    status: FilterStatus
    isActive: boolean
};

export function Filter({status, isActive, ...rest}: Props){
    return (
        <TouchableOpacity 
        style={[styles.container, {opacity: isActive ? 1 : 0.3}]} 
        activeOpacity={0.5}
        {...rest}
        >
            <StatusIcon status={status} />
            <Text style={styles.title}>
                {status ===FilterStatus.DONE ? "Comprados" : "Pendentes"}
                </Text>
        </TouchableOpacity>);
}