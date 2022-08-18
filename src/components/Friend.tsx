import React from 'react';
import {
    Text
} from 'react-native';

interface FriendProps {
    data: {
        name: string;
        likes: number;
    };
}

export function Friend({ data }: FriendProps) {
    return (
        <Text>
            {data.name} - Likes: {data.likes}
        </Text>
    );
}