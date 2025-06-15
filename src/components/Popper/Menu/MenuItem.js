import Button from '~/components/Button';
function MenuItem({ data }) {
    return (
        <div className="block py-[12px] pl-[18px] hover:bg-[#16182308]">
            <Button lefticon={data.icon} to={data.to}>
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;
