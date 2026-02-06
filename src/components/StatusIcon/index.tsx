import { FilterStatus } from "@/types/filter.status";
import {CircleDashed, CircleCheck} from "lucide-react-native"

export function StatusIcon( {status}: {status: FilterStatus}) {
    return status === FilterStatus.DONE ? 
    <CircleCheck color="#2C46B1" size={18} /> :
    <CircleDashed color="#000" size={18} />
}