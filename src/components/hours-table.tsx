import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

export const HoursTable = () => {
    return (
        <div>
            <Table className="text-base">
                <TableHeader>
                    <TableRow>
                        <TableHead>Day</TableHead>
                        <TableHead>Hours</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Monday</TableCell>
                        <TableCell>7:00 AM - 5:00 PM</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tuesday</TableCell>
                        <TableCell>7:00 AM - 5:00 PM</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Wednesday</TableCell>
                        <TableCell>7:00 AM - 5:00 PM</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Thursday</TableCell>
                        <TableCell>7:00 AM - 5:00 PM</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Friday</TableCell>
                        <TableCell>7:00 AM - 5:00 PM</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Saturday</TableCell>
                        <TableCell>8:00 AM - 2:00 PM</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sunday</TableCell>
                        <TableCell>Closed</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}