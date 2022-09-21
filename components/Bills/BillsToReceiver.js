import BillsComponent from '.'

export default function BillsToReceiverComponent({ hideValue }) {
  return (
    <>
      <BillsComponent type={'receiver'} hideValue={hideValue} />
    </>
  )
}
