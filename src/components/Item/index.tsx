import {View, Text, TouchableOpacity} from "react-native";
import { styles } from "./styles";

import { Trash2 } from "lucide-react-native";
import { StatusIcon } from "../StatusIcon";
import { FilterStatus } from "@/types/filter.status";

type ItemData = {
    status: FilterStatus;
    description: string;
}

type Props = {
    data: ItemData;
    onRemove: () => void;
    onStatus: () => void;
}

export function Item({data, onRemove, onStatus}: Props) { 
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
                <StatusIcon status={data.status} />
            </TouchableOpacity>

            <Text style={styles.description}>
                {data.description}
            </Text>

            <TouchableOpacity onPress={onRemove}>
                <Trash2 color="#828282" size={18} />
            </TouchableOpacity>
        </View>
    );
}