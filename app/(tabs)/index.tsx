import { Text, View } from "@/components/Themed"

export default function TabOneScreen() {
    return (
        <View className="flex-1 items-center justify-center bg-[#ff6347]">
            <View className="absolute top-0 left-0 right-0 h-1/2 bg-[#ff4500]">
                <Text className="text-4xl">test</Text>
            </View>
            <Text className="text-4xl">Hello rld 😎🚀</Text>
            <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    )
}