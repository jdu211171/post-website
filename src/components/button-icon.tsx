import { Button } from "@/components/ui/button";

type ButtonIconProps = {
    Icon: React.ElementType;
};

export function ButtonIcon({ Icon }: ButtonIconProps) {
    return (
        <Button variant="outline" size="icon">
            <Icon className="h-4 w-4" />
        </Button>
    );
}
