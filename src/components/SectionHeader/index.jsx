import React from 'react';
import './SectionHeader.styl';

/**
 * SectionHeader
 * Reuseable component: including title and underline
 * @param {{ title: string, underlineColor?: string }} props
 */
export default function SectionHeader({ title, underlineColor = '#1DA57A' }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <div
        className="underline"
        style={{ backgroundColor: underlineColor }}
      />
    </div>
  );
}