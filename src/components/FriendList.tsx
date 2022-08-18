import React, { useMemo } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { Friend } from './Friend';

interface SearchResultsProps {
    data: {
        id: number;
        name: string;
        likes: number;
        online: string;
    }[];
    follow: () => void;
}

export function FriendList({ data, follow }: SearchResultsProps) {
    const totalLikes = useMemo(() => {
        return data.reduce((likes, friend) => {
            return likes + friend.likes;
        }, 0);
    }, [data]);

    return (
        <View>
            <Text>
                Total de likes: {totalLikes}
            </Text>

            {
                data.map((item, index) => (
                    <Friend
                        key={String(index)}
                        data={item}
                        follow={follow}
                    />
                ))
            }
        </View>
    );
}