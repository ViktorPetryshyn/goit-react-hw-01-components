import { Extension, ExtensionQuery } from './StatsItem.styled';

export const StatsInfo = ({ statsInfo: { label, percentage } }) => {
  return (
    <>
      <Extension>{label}</Extension>
      <ExtensionQuery>{percentage}%</ExtensionQuery>
    </>
  );
};
