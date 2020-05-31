import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, color, size }: IconProps) => {
  return <FontAwesome name={name} size={size} color={color} />;
};

export default Icon;
