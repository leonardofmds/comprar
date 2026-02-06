import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/filter.status';
import { Item } from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [
  FilterStatus.PENDING,
  FilterStatus.DONE
];

const ITEMS = [
  {
    id: "1",
    status: FilterStatus.PENDING,
    description: "Arroz",
  },
  {
    id: "2",
    status: FilterStatus.DONE,
    description: "Feijão",
  },
  {
    id: "3",
    status: FilterStatus.PENDING,
    description: "Macarrão",
  },
  {
    id: "4",
    status: FilterStatus.PENDING,
    description: "Carne",
  }
]
export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/logo.png")}
        style={styles.logo}
      />
      <View style={styles.form}
      >
        <Input placeholder='O que você precisa comprar?' />
        <Button
          title="Entrar" />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map(status => (
              <Filter key={status} status={status} isActive></Filter>
            ))
          }
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => { console.log("Remover") }}
              onStatus={() => { console.log("Mudar status") }}
            />
          )}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={()=> <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
        />

      </View>
    </View>
  )
};