import React from 'react';
import {
    View
} from 'react-native';

import { Friend } from './Friend';

interface SearchResultsProps {
    data: {
        id: number;
        name: string;
        likes: number;
    }[];
}

export function FriendList({ data }: SearchResultsProps) {
    return (
        <View>
            {
                data.map((friend) => (
                    <Friend
                        key={String(friend.id)}
                        data={friend}
                    />
                ))
            }
        </View>
    );
}