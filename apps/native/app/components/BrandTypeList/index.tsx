/** @jsxImportSource nativewind */
import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Label } from "@repo/ui";

type BrandType = {
  id: string;
  name: string;
};

const brandTypes: BrandType[] = [
  {
    id: "shop_online",
    name: "Shop online",
  },
  {
    id: "book_travel",
    name: "Book travel",
  },
  {
    id: "order_food",
    name: "Order food",
  },
  {
    id: "book_hotels",
    name: "Book hotels",
  },
  {
    id: "more",
    name: "More",
  },
];

interface BrandTypeListProps {
  onSelectType?: (type: BrandType) => void;
  defaultSelected?: string;
}

export function BrandTypeList({
  onSelectType,
  defaultSelected = "shop_online",
}: BrandTypeListProps) {
  const [selectedType, setSelectedType] = useState<string>(defaultSelected);

  const handleSelect = (type: BrandType) => {
    setSelectedType(type.id);
    onSelectType?.(type);
  };

  const renderItem = ({ item }: { item: BrandType }) => (
    <TouchableOpacity className="my-6" onPress={() => handleSelect(item)}>
      <View
        className={`px-4 py-2 mx-2 rounded-full ${
          selectedType === item.id
            ? "bg-primary shadow-md shadow-primary/80 elevation-24"
            : "bg-[#B377FF33] shadow-md shadow-[#B377FF]/50 elevation-8"
        }`}
      >
        <Label
          className={`${selectedType === item.id ? "font-[500]" : "font-[400]"}`}
          color={selectedType === item.id ? "white" : "muted"}
          textAlign="center"
        >
          {item.name}
        </Label>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        paddingHorizontal: 8,
      }}
      data={brandTypes}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
