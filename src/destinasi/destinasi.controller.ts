import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('Destinasi')
@Controller('destinasi')
export class DestinasiController {
	@Get()
	@ApiOperation({ summary: 'Menampilkan daftar destinasi wisata' })
	@ApiResponse({ status: 200, description: 'Daftar destinasi berhasil diambil' })
	findAll() {
		return 'Daftar destinasi wisata akan tampil di sini';
	}

	@Post()
	@ApiOperation({ summary: 'Menambahkan destinasi baru (khusus admin)' })
	@ApiResponse({ status: 201, description: 'Destinasi berhasil dibuat' })
	@ApiResponse({ status: 400, description: 'Data tidak valid' })
	create(@Body() dto: CreateDestinasiDto) {
		return dto;
	}

	@Get(':id')
	@ApiOperation({ summary: 'Menampilkan detail destinasi wisata' })
	@ApiResponse({ status: 200, description: 'Detail destinasi berhasil diambil' })
	findOne(@Param('id') id: string) {
		return `Detail destinasi ${id} akan tampil di sini`;
	}

	@Patch(':id')
	@ApiOperation({ summary: 'Memperbarui destinasi wisata' })
	@ApiResponse({ status: 200, description: 'Destinasi berhasil diperbarui' })
	@ApiResponse({ status: 400, description: 'Data tidak valid' })
	update(@Param('id') id: string, @Body() dto: UpdateDestinasiDto) {
		return { id, ...dto };
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Menghapus destinasi wisata' })
	@ApiResponse({ status: 200, description: 'Destinasi berhasil dihapus' })
	remove(@Param('id') id: string) {
		return `Destinasi ${id} berhasil dihapus`;
	}
}
