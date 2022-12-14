import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import lodash from 'lodash';

interface FriendProps {
    data: {
        id: number;
        name: string;
        likes: number;
        online: string;
    };
    follow: () => void;
}

function FriendComponent({ data, follow }: FriendProps) {
    return (
        <View style={{ marginBottom: 10 }}>
            <Text>
                {data.name} - Likes: {data.likes}
            </Text>

            <TouchableOpacity onPress={follow}>
                <Text>Deixar de seguir</Text>
            </TouchableOpacity>

            <Text>
                Online em {data.online}
            </Text>
        </View>
    );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.data, nextProps.data);
});