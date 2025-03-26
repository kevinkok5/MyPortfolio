import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function ProjectDescriptionNotCreatedYetDialog({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div>{children}</div>
            </AlertDialogTrigger>
            <AlertDialogContent className="!rounded-xl">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">
                        Ooops Sorry!!
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This Project description is hasn't been added yet.
                        Please check back later for updates.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="rounded-xl text-white">
                        Close
                    </AlertDialogCancel>
                    {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
